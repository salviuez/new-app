import React, { useState } from "react";
import { ColorBox } from './ColorBox';
import Button from '@mui/material/Button';

export function AddColor() {
    const [color, setColor] = useState("blue");
    const styles = { background: color, };
    const [colorList, setColorList] = useState(["red", "skyblue", "green"]);
    return (
        <div>
            <input type="text" style={styles}
                onChange={(event) => setColor(event.target.value)}
                value={color} />

            <Button onClick={() => setColorList([...colorList, color])} variant="contained">Add Movie</Button>
            {colorList.map((clr) => (
                <ColorBox clr={clr} />
            ))}
            <ColorBox clr="red" />
            <ColorBox clr="blue" />
        </div>
    );

}
