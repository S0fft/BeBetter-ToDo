# BeBetter-ToDo
#### ToDo-App — Task Management Startup on Django REST Framework & React.js [Teamwork]

ToDo API application made in a team. The client side is written on React, the server side on Django REST Framework.
In application has created user registration/authorization (JWT), user-profile-settings. The user can create a list of tasks, give them labels, delete, change and much more.
Added OAuth 2.0 (Google). For storage using MySQL.

#### Stack:
##### Frontend:
 - TypeScript
 - JavaScript
 - React.js
 - HTML / CSS
 ##### Backend:
 - Python
 - Django
 - Dajngo REST Framework
 - MySQL
 - Docker
 - Swagger

Additional libraries are specified in the `requirements.txt` file.

## Project Setup with Docker
In this section, we will deploy the project on PC using Docker and Docker Compose.

### - Cloning a Project from GitHub
Create a root directory on your computer, then open it in your code editor or terminal.
<br>
Next, write this command into the command line:
```powershell
git clone https://github.com/S0fft/BeBetter-ToDo.git .
```
You will see the project files appear in your directory.

### - Running Docker Desktop and Docker Compose
Afterwards, launch the already installed Docker Desktop. Next, while it is running, you can return to the editor or terminal and enter the following command in the terminal:
```powershell
docker-compose up --build
```
This command "collects and runs all the code", allowing you to interact with the project through a browser.

### - Check by Port
Now the project is already running on your computer, and is available on port 8000.
Go to this address to open it:
```powershell
http://localhost:8000/
```
Thus, we have run the project locally on computer. The server will indicate which links are available to you.

## <p align="center">Windows [Without Docker]</p>

### - Installing the Stack
To begin, install: [Python](https://www.python.org/downloads/) | [MySQL](https://www.mysql.com/downloads/) <br> Links are provided to the latest versions of the tools.
<br>

### - Cloning a Project From GitHub
All the same, сreate a root directory on your computer, then open it in your code editor or terminal.
<br>
Next, write this command into the command line:
```powershell
git clone https://github.com/S0fft/BeBetter-ToDo.git .
```
You will see the project files appear in your directory. After, continue to enter the following commands.

### - Creating a Virtual Environment
Create a virtual environment:
```powershell
python -m venv .venv
```

And activate it:

```powershell
.venv\Scripts\Activate
```

### - Installing the Requirements
Next, install packages:

```powershell
python.exe -m pip install --upgrade pip
```
```powershell
pip install -r requirements.txt
```

<!-- ### Fixtures
Load data from fixture for devices
```powershell
code
``` -->

### - Running the Server
Then, run server:
```powershell
python manage.py runserver
```
<br>

<!-- ---------------------------------------------- -->

## <p align="center">UNIX Systems [Without Docker]</p>
These commands do the same thing as described above, only on UNIX systems. <br> Before this, the code must be modified as indicated in the note above!
<br>

### - Virtual a Environment
```bash
python3 -m venv ../venv
```

```bash
source ../venv/bin/activate
```

### - Installing the Requirements
```bash
pip3 install --upgrade pip
```
```bash
pip3 install -r requirements.txt
```

<!-- ### Fixtures
```bash
code
``` -->

### - Running the Server
```bash
python manage.py runserver
```
</details>
