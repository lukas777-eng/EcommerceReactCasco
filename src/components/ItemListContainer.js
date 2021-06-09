import {Counter} from '../components/ItemCount';

export const ItemListContainer = (props) => {
    return(
        <div>
            <h1>{props.greeting}</h1>
            <Counter/>

        </div>
    )
};