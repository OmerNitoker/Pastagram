import { carService } from "../../services/car.service.js"

export const SET_CARS = 'SET_CARS'
export const REMOVE_CAR = 'REMOVE_CAR'
export const ADD_CAR = 'ADD_CAR'
export const UPDATE_CAR = 'UPDATE_CAR'


export const SET_CART_IS_SHOWN = 'SET_CART_IS_SHOWN'
export const REMOVE_CAR_FROM_CART = 'REMOVE_CAR_FROM_CART'
export const ADD_CAR_TO_CART = 'ADD_CAR_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export const CAR_UNDO = 'CAR_UNDO'


const initialState = {
    cars: [],
    lastCars: [],
    isCartShown: false,
    shoppingCart: [],
    filterBy: carService.getDefaultFilter(),
    isLoading: false
}

export function carReducer(state = initialState, action = {}) {
    let cars
    let shoppingCart
    let lastCars
    switch (action.type) {
        // Cars
        case SET_CARS:
            lastCars = [...action.cars]
            return { ...state, cars: action.cars, lastCars }

        case REMOVE_CAR:
            lastCars = [...state.cars]
            cars = state.cars.filter(car => car._id !== action.carId)
            return { ...state, cars, lastCars }

        case ADD_CAR:
            cars = [...state.cars, action.car]
            return { ...state, cars }

        case UPDATE_CAR:
            cars = state.cars.map(car => car._id === action.car._id ? action.car : car)
            return { ...state, cars }

        case CAR_UNDO:
            cars = [...state.lastCars]
            return { ...state, cars }


        // Shopping Cart
        case SET_CART_IS_SHOWN:
            return { ...state, isCartShown: action.isCartShown }

        case ADD_CAR_TO_CART:
            shoppingCart = [...state.shoppingCart, action.car]
            return { ...state, shoppingCart }

        case REMOVE_CAR_FROM_CART:
            shoppingCart = state.shoppingCart.filter(car => car._id !== action.carId)
            return { ...state, shoppingCart }

        case CLEAR_CART:
            return { ...state, shoppingCart: [] }

        case SET_FILTER_BY:
            return { ...state, filterBy: {...action.filterBy} }

        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        default:
            return state;
    }
}