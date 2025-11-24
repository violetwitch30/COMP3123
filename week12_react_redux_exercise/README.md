## How the App Works
1. User clicks “Login”.
2. A fake JWT token is created.
3. Redux action LOGIN is dispatched.
4. Reducer updates the state with the token.
5. App shows the token on the screen.
6. Clicking “Logout” dispatches LOGOUT and clears the token.

## Files
- store.js → creates Redux store
- reducer.js → controls how state changes
- actions.js → LOGIN and LOGOUT actions
- App.js → simple UI