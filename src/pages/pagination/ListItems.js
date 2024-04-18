import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/productslice';

function ListItems() {
    const [list, setList] = useState(null);
    const dispatch = useDispatch();
    const listData = useSelector((state) => state.list);

    //Trigger once after initial DOM rendering
    useEffect(() => {
        dispatch(getList())
    }, [])

    useEffect(() => {
        if (listData?.data?.length) {
            setList(listData.data);
        }
    }, [listData]);

    return (
        <div>
            {list?.map((item, index) => (
                <p key={item.id}>{item.title}</p>
            ))}
            {listData?.error ? "true" : "fasle"}
        </div>
    );
}

export default ListItems;