import {Counter} from '../ItemCount/ItemCount';
import { Item } from '../Item/Item';

export const ItemListContainer = (props) => {
    return(
        <div>
            <h1>{props.greeting}</h1>
            <Counter/>
            <Item/>

        </div>
    )
};