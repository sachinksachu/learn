import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/productslice';

function ListItems() {
    const [list, setList] = useState(null);
    const [sort, setSort] = useState(false);
    const dispatch = useDispatch();
    const listData = useSelector((state) => state.list);

    const [sortField, setSortField] = useState({'title': true, 'price' : false}); // Track currently sorted field
  const [sortOrder, setSortOrder] = useState('asc'); // Track sort order (asc/desc)

    //Trigger once after initial DOM rendering
    useEffect(() => {
        dispatch(getList())
    }, [])

    useEffect(() => {
        if (listData?.data?.length) {
            setList(listData.data);
        }
    }, [listData]);

    const sortUsers = (field) => {
        const sorted = [...list].sort((item1, item2) => {
          const order = sortOrder === 'asc' ? 1 : -1;
          switch (field) {
            case 'title':
              return item1.title.localeCompare(item2.title) * order;
            case 'price':
              return (item1.price - item2.price) * order;
            default:
              return 0; // No sorting for other fields
          }
        });
        setList(sorted);
        const _field = {...sortField, ...Object.fromEntries(Object.keys(sortField).map(key => [key, false])), [field]: true}
        setSortField(_field); // Update currently sorted field
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
      };
    

    return (
        <div>
            {listData?.error ? "true" : "fasle"}
            <table>
      <thead>
        <tr>
          <th>Title <span onClick={() => sortUsers('title')}>{sortField.title ? (sortOrder === 'asc' ? '^' : 'D') : '^,D'}</span></th>
          <th>Price <span onClick={() => sortUsers('price')}>{sortField.price ? (sortOrder === 'asc' ? '^' : 'D') : '^,D'}</span></th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    );
}

export default ListItems;