# Crelio-UserListing-frontend

Frontend code for User listing app

Crelio app consists of backend and a frontend

backend code - https://github.com/pankaj-j-sharma/Crelio-UserListing-backend.git
frontend code - https://github.com/pankaj-j-sharma/Crelio-UserListing-frontend.git

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

# setup of the project 
cd frontend
npm cache clean -f => to clean the cache
npm install --force  => to install all the dependencies 
ng serve --open => to run the app 


# app navigation 
When the page is loaded it will redirect to login page where we need to put the credentials 
created / supplied above
On reaching home page we can see there is a list of users that were loaded from the external API
When clicking on view icon at the corner we can see the details of each User 
Also server side pagination is implemented 

There is a search bar which matches the uuid , username , first name , last name 
Any query entered in the search bar is matched against these fields and accordingly results are fetched 

There is one more menu option where it says Load Data ,
we can input the number of records to be fetched and also we can see how many total users we have in our database

PLease find below screenshots for reference 

![Login Page](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/login_page.JPG)

![Home Page](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/home_page.JPG)

![Log Out](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/home_page_logout.JPG)

![User Details](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/user_detail_page.JPG)

![Load Data from external API ](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/load_data_page.JPG)

![After Loaded Data](https://raw.githubusercontent.com/pankaj-j-sharma/Crelio-UserListing-frontend/development/frontend/src/assets/images/readme/loaded_data_page.JPG)


