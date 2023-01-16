import React from "react";
import { Table, Typography } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Sections/Styles.css';


export default function GtsDrinks() {
    const data = [
        {
            "brand": "GT's Synergy",
            "name": "Passionberry Bliss",
            "profile": "fruit",
            "comments": "Very delicious. etc...",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Peach Paradise",
            "profile": "fruit",
            "comments": "very delicious...",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerberry",
            "profile": "fruit, spice",
            "comments": "pretty good...",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Guava Goddess",
            "profile": "fruit",
            "comments": "pretty good...",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Golden Pineapple",
            "profile": "fruit",
            "comments": "very delicious...",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Lemon Berry",
            "profile": "fruit, citrus",
            "comments": "very delicious....",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Watermelon Wonder",
            "profile": "fruit",
            "comments": "very good",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Sacred Life",
            "profile": "fruit, spice, other",
            "comments": "very good (describe other)",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Tangerine Dream",
            "profile": "citrus",
            "comments": "very good",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Mystic Mango",
            "profile": "fruit",
            "comments": "very good....",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Living In Gratitude",
            "profile": "spice, fruit, coconut",
            "comments": "very good, one of my favorites",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Carrot Turmeric",
            "profile": "spice",
            "comments": "very good....",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Hibiscus Ginger",
            "profile": "floral, spice",
            "comments": "not very good....",
            "rating": "2",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Raspberry Chia",
            "profile": "fruit, chia seeds",
            "comments": "very good",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Serenity",
            "profile": "fruit",
            "comments": "not very good",
            "rating": "2",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Lemonade",
            "profile": "fruit, citrus",
            "comments": "better than the regular strawberry....",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Pink Lady Apple",
            "profile": "fruit",
            "comments": "pretty good...",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Cosmic Cranberry",
            "profile": "fruit",
            "comments": "very good...",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Multi-Green",
            "profile": "other",
            "comments": "not bad.....",
            "rating": "2.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerade",
            "profile": "spice",
            "comments": "not bad...",
            "rating": "3.5",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="gts-brand">
            <h2 className="brand-h2">
                GT's
            </h2>
            <TableContainer className="container" component={Paper} sx={{ width: 1000, margin: 'auto', }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ height: 130 }}>
                        <TableRow className="table-head-row">
                            <TableCell className="">
                                <Typography className="tablecell-1">Drink Name</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className="tablecell-1">Flavor Profile</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className="tablecell-1">Rating</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography className="tablecell-1">Comments</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography className="tablecell-1">Repurchase?</Typography>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((data) => (
                                <TableRow
                                key={data.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="table-row"
                                >
                                    <TableCell className="tablecell-2" align="left">{data.name}</TableCell>
                                    <TableCell className="tablecell-2" align="left">{data.profile}</TableCell>
                                    <TableCell align="left">
                                        <Rating 
                                        value={data.rating} 
                                        precision={0.5}
                                        icon={<FavoriteIcon sx={{color: '#f8f800'}} fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon className="hearts" fontSize="inherit" />}
                                        readOnly />
                                    </TableCell>
                                    <TableCell className="tablecell-2" align="left">{data.comments}</TableCell>
                                    <TableCell className="tablecell-2" align="right">{data.repurchase}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
            </TableContainer>
        </div>
    )
}