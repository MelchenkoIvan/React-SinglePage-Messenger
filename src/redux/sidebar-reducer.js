let initialState = {

    friendData: [
        { id: 1, name: 'Ivan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
        { id: 2, name: 'Nazar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
        { id: 3, name: 'Maks', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
        { id: 4, name: 'Alona', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
        { id: 5, name: 'Vlad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' }
    ]


};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}
export default sidebarReducer;