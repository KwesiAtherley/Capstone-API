# SR Solutions Back End API

### How it works
Once a user signs up and signs in, the user is able to create a product, by detailing the name, brand, quantity, cost and sale of said product. The user can also show and list a single or all of their products, and update or delete a particular entry.

### Links
* [SR Solutions Front End Repo](https://github.com/KwesiAtherley/SR-Solutions-Client)
* [SR Solutions Back End Repo](https://github.com/KwesiAtherley/Capstone-API)
* [SR Solutions Deployed Site](https://kwesiatherley.github.io/SR-Solutions-Client/)
* [SR Solutions Back End Deployed Site]( https://secure-sea-49423.herokuapp.com/)

### Entity Relationship Diagrams
![Entity Relationship Diagrams](https://i.imgur.com/jIHjMm3.jpg)

### API Routes and Paths
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| POST   | `/products-create`               | `products#create`    |
| GET    | `/products`               | `products#index`     |
| GET    | `/products/:id`           | `products#show`      |
| PATCH  | `/products/:id/edit`           | `products#update`    |
| DELETE | `/products/:id/`          | `products#delete`    |

### List of Technologies Used
* JavaScript
* Express
* Mongodb
* Mongoose
* Node.js
* Heroku
* mlabs
* Nodemon

### Unsolved problems
This app was created for use by the owner of a small busines that only sells one type of product. Right now it allows the user to track their inventory and the cost and retial price of said product. I am working towards the goal of also allowing the user to do calculations for profit per product and also the ability to use this application alongside their current Point of Sale software.

### Planning, process, and problem-solving strategies
The planning process for this application included speaking to a small business owner and documenting their needs. Next we identified what was possible to accomplish in the small time frame allowed. From there the decision to keep it simple by using a one to many relationship was made. The technologies to be used were chosen and the general outline of the application was created.
The back end was created first and tested using curl scripts before moving onto the front end. After completing the core functionality of the application, minimal styling was done due to the lack of remaining time alloted to complete the application. During development, obstacles and challenges were overcome by reasarching the issue using google and StackOverflow. The final technique used to overcome said obstacles and challenges was to meet with an instructor for consulting and guidance.


### Setup and installation instructions
1.  Fork and clone this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.
1.  Run `npm run serve` to run website on local
