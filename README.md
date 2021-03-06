## frontend

- App.js
  - Skeleton of the file
    -test
- Login.js
  - Page with a place to enter email and password
- Register.js
  - Page to register. Should have name, email, password, confirm password, and accept the terms. Followed by a submit button.
- PostForm.js
  - Page to enter your post. This will be a form
    - Name
      - text input
    - Email
      - text input
    - Tagline
      - text input
    - Country
      - text input
    - Date
      - calendar
    - Descritpion
      - text input
    - Rating
      - radio button
    - Make it Private?
      - Checkbox
    - Submit
      - submit button sends post to dashboard
- Dashboard.js

  - Page where a person's posts will appear

  ## MUSTS:

  ::: review site for functionality and bugs
  --- cannot login or register; button does nothing on click
  --- cannot add post, getting a 401 error on submit
  --- --- see PostActions line 38
  --- cannot edit post, getting a 401 error on submit
  --- --- see PostActions line 67
  --- new post on submit should take you to the dashboard instead of staying on post page
  --- entries are too large, make smaller card size for dashboard
  --- --- keep large entries on click to view just that one card
  --- cannot delete post, getting a 401 error on submit
  --- ux/ui of everything is haphazard
  --- login/register buttons are permanently showing even in dashboard etc.
  --- get rid of home / meet team / entries links

  -- create dashboard / home page for users with current day, scheduled events, weather etc.
  -- save events in the future
  -- scrape for events in certain zip codes at certain dates to plan trips

  ## COLOR SCHEME:

  - https://coolors.co/ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0
    --terra-cotta: #ed6a5aff;
    --pale-spring-bud: #f4f1bbff;
    --opal: #9bc1bcff;
    --cadet-blue: #5ca4a9ff;
    --alabaster: #e6ebe0ff;

  ## FONTS:

  - font-family: 'Nunito', sans-serif;
  - font-family: 'Rock Salt', cursive;

  - @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,300&family=Rock+Salt&display=swap');

  ## Frontend:

  - Tom & Virginia - login, register, postForm, dahsboard
  - Tatiana - functionality

## Deployed URL : https://expatjournal-hn34yna9s.vercel.app/
