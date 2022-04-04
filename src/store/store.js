import { configureStore, createSlice  } from '@reduxjs/toolkit'

const userSlice = createSlice({  
    name: 'users',
    initialState: {
        list: [],
        status: null,
    },
    reducers: {
        getUser: (state, action) => {
            state.list = action.payload.list;
            state.loading = true;
            state.error = false;
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.list = state.list.filter((item) => item.id !== id);
            state.loading = false;
        },
    },
});

 const store = configureStore({
    reducer: {
        users: userSlice.reducer,
     },
 });


export const getUserData = (limit) => {
    return async (dispatch) => {      
        const sendRequest = async () => {
            const response = await fetch(
            `https://api.github.com/users?per_page=${limit}`,
        );
  
        if (!response.ok) {
          throw new Error('Fetching data failed.');
        }
          console.log(response);

        const data = await response.json();

            console.log(data);

        return data;  
      };
  
      try {
          const userData = await sendRequest();
          
          dispatch(
            userSlice.actions.getUser({
                  list: userData || [],
              })
          );
      } catch (error) {
        throw new Error('Request failed.');
      }
    
    };
 };
  

export default store;
export const { createUser, deleteUser, getUser } = userSlice.actions;