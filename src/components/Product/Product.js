import { useEffect, useState } from "react"
import { getFirestore } from '../../firebase'
import { Item } from '../Item/Item'

export const Product = (props) => {

  const [items, setItems] = useState([])
  const [isEmptyCategory, setIsEmptyCategory] = useState(false)

  useEffect(
    () => {
      const db = getFirestore()
      const ItemCollection = db.collection('Item')
      ItemCollection.get().then(
        (querySnapshot) => {
          if (querySnapshot.size === 0) {
            setIsEmptyCategory(true)
          }
          setItems(querySnapshot.docs.map((doc) => doc.data()))
        }
      ).catch((error) => console.error('Firestore error:', error))
    }, []
  )

    return(
      <div>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <p>items.map((item)) => (
          <Item
              key={items.title}
              image={items.imageId}
              name={items.title}
              price={items.price}
              />
        )
        </p>
      </div>
    )
        }