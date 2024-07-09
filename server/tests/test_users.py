# from django.contrib.auth.models import User
# from django.urls import reverse
# from rest_framework import status
# from rest_framework.test import APITestCase


# class RegisterViewTests(APITestCase):

#     def test_register_user_success(self):
#         url = reverse('users:auth_register')
#         data = {
#             'username': 'testuser',
#             'password': 'Testpassword123',
#             'email': 'testuser@example.com'
#         }
#         response = self.client.post(url, data, format='json')

#         if response.status_code != status.HTTP_201_CREATED:
#             print(response.data)

#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(User.objects.count(), 1)
#         self.assertEqual(User.objects.get().username, 'testuser')
