# Strike-system
(Discord.js)


# Modules

- npm i discord.js
- npm i ms
- npm i fs

# File

- JSON FILE

First you need to create a file named "warnings.json" (please ensure that the file extention is in json)
Put your "warnings.json" file in your bot folder
This file need to be insert inside your 'main.js' folder
You can now get strike records from this user by a JSON file.

- JAVASCRIPT FILES

These files need to be insert inside your commands file.
You can find the commands file by follow this link : https://github.com/Shedhatch/Commands-file

# Commands

(put your prefix before 'strike/strikelevel')

[TO STRIKE AN USER]

<strike_@user_reason>

[TO KNOW THE STRIKELEVEL OF AN USER]

<strikelevel_@user>
You can now earn an user and get strike records from this user.

# Reminder

You can find some quotes in my code that guide you to add or remove some interest things.

# Note

If a user has 0 strikes and you write down the command <strikelevel_@user> you will get an error in your console. 
This error means that the function of warns are undefinited because the user is unknown in your json file so the system can't get it. 
I will try to fix that later.
