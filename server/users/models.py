from smtplib import SMTPException

from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
from django.db import models
from django.urls import reverse
from django.utils.timezone import now


class User(AbstractUser):
    image = models.ImageField(upload_to='users_images', null=True, blank=True)
    is_verified_email = models.BooleanField(default=False)
    registration_date = models.DateTimeField(auto_now_add=True)


class EmailVerification(models.Model):
    code = models.UUIDField(unique=True)
    user_name = models.ForeignKey(to=User, on_delete=models.CASCADE)
    time_created = models.DateTimeField(auto_now_add=True)
    time_expiration = models.DateTimeField()

    def __str__(self):
        return f'Email Verification message for: {self.user.email}'

    def send_verification_email(self):
        link = reverse('users:email_verification', kwargs={'email': self.user.email, 'code': self.code})
        verification_link = f'{settings.DOMAIN_NAME}{link}'
        subject = f'Confirmation of the account for {self.user.username}'
        message = f'To confirm the account {self.user.email} follow this link {verification_link}.'

        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[self.user.email],
                fail_silently=False,
            )
        except SMTPException as e:
            print(f"!!!---Error sending email: {e}---!!!")

        def is_expired(self) -> bool:
            return True if now() >= self.expiration_time else False
