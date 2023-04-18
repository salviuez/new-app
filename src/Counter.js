import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
    //let like = 10;
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(disLike + 1);

    useEffect(() => {
        console.log('like value is updated', like);
    }, [like, disLike])

    return (
        <div>
            <IconButton
                onClick={incrementLike}
                color="primary"
                aria-label="add to shopping cart">
                <Badge badgeContent={like} color="primary" aria-label="add to shopping cart">👍</Badge>
            </IconButton>



            <IconButton
                onClick={incrementDisLike}
                color="error" aria-label="add to shopping cart">
                <Badge badgeContent={disLike} color="error" aria-label="add to shopping cart">👎</Badge>
            </IconButton>


        </div>
    );
}
