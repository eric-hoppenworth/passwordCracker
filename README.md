# Password Cracker


This tool can't reasonably be used to perform any attacks, it is simply meant to give an idea of how a simple brute force method can be used to guess a password.

This simple idea behind a brute-force password cracker is that it tries every possible combination of password.

This tool allows you to choose:
* The 'password' to be guessed (or if you are clever you can include your own code to randomly generate a password)
* Which characters are possible (upper, lower, numbers, or some combination of those.  I leave it up to you to write code to include any special characters)
* The minimum length of the password. (some applications make an 8-character requirement for example)
* The maximum length that the guesser will try. (if a user makes a 100-character password, it could take billions and billions and billions of years to complete)
* To reiterate, __Be sure to include a maximum length__.  Something less than ten should give you a reasonable speed.  Remember that it will get EXPONENTIALLY more difficult for each character added.

##

### How do I start guessing??

1. First, go over to [the code page](/index.js).  Using google chrome, open the inspector.

2. Paste into the inspector lines 1 through 74 of the code.  At this point, nothing should happen.

3. Next, change line 78 to a password of your choosing.  Copy that into the inspector and press enter.
```javascript
//setting my password to 'dog'
password = "dog"; 
```

4. Now copy in line 83 and press enter.  This will start you off with an empty list of possible characters.  Also copy over any of lines 85-87 depending on what you want to include.  For example, if your password is known to only include lowercase letters, then you will copy over line 85 only.  If you want both uppercase and lowercase letters, copy lines 85 and 87. __DO NOT COPY OVER THE SAME ONE TWICE__.  If you make a mistake, change your mind, or are just not sure what you've copied already; simply recopy line 83, then make your choices again.
```javascript
//This code will allow the guesser to look through lowercase letters and numbers.
//if a password contains uppercase letters, it will never be guessed correctly.
characters = [];

includeLower(characters);
includeNumbers(characters);
```

5. Almost there.  Now you need to set the minimum and maximum lengths.  By default, the lowest minimum you can use is 1 and the highest max is 10, but you should try something between 5~7.  If you select a maximum that is small than your minimum, it will only search for passwords exactly equal in length to your minimum.  Decide on your values and copy over lines 93 and 94.
```javascript
minimumLength = 3;
maximumLength = 6;
```

6. Now you are ready to start.  Paste the following command into the inspector and hit enter.  Now go get a snack, it could take a while.

```javascript
startGuessing();
```
While the guesser is running, it will give you a 'Still Searching...' message.
It will give you this message once every 260,000 guesses.  The little number beside it tells you how many times it has printed that message.  As long as it is still going up, the code is still running.

You can use math to determine if you are getting close to a solution.
A password of ten characters(lowercase only) will have 26^10 = _141,167,095,653,376_ possibilites.  If the message fires every 260,000 you should get about 141,167,095,653,376/260,000 = _542,950,367_ messages before all possibilities are tried.  This could literally take MONTHS.

##
After completetion, you should get a short print out that states the password, how many guesses it took, and the number of miliseconds spent.  Miliseconds are 1/1000 of a second, so multiply by 1000 if you want to know how many seconds it was.

If you would like to perform another guess, simply repeat steps 3 through 6.  If you are not changing the password, you can skip step 3.  If you are not changing the possible characters, you can skip step 4.  If you are not changing the min or max, you can skip step 5.  You will always have to run step 6 to start it up.

Happy Hacking!