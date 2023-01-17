import React from "react";
import { Table, Typography } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
// import { styled } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Sections/Styles.css';

export default function KevitaDrinks() {
    const data = [
        {
            "rating": "2.5",
            "brand": "KeVita Master Brew",
            "name": "Tart Cherry",
            "profile": "fruit, spice",
            "comments": "Cherry and ginger. Not the worst I've ever had, but cherry and ginger don't go well together.",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "KeVita Master Brew",
            "name": "Pineapple Peach",
            "profile": "fruit, spice",
            "comments": "Pineapple, peach, ginger. Pretty good, but I'd go for a GT's pineapple or peach first.",
            "repurchase": "Yes",
        },
        {
            "rating": "3",
            "brand": "KeVita Master Brew",
            "name": "Raspberry Lemonade",
            "profile": "fruit, citrus, spice",
            "comments": "Raspberry, lemon, and ginger. Not terrible but could be better without the ginger.",
            "repurchase": "No",
        },
        {
            "rating": "3",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Lemon Ginger",
            "profile": "citrus, spice",
            "comments": "Lemon and ginger. Not bad, but there are much better ginger lemon drinks available.",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Mango Coconut",
            "profile": "fruit, coconut",
            "comments": "Mango, apple cider vinegar, and coconut. Not bad but the flavor could be stronger.",
            "repurchase": "Yes",
        },
        {
            "rating": "3.5",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Pomegranate",
            "profile": "fruit",
            "comments": "Pomegranate and apple cider vinegar. Pretty good, can't go wrong with pomegranate! But Health-Ade's pomegranate is better",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Strawberry Acai Coconut",
            "profile": "fruit, coconut",
            "comments": "Strawberry, acai and coconut. Pretty good, my go-to KeVita drink and possibly their best flavor.",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="kevita-brand">
            <h2 className="brand-h2">
                ~ KeVita ~
                <p className="brand-p">good in a pinch but not my go-to brand. they use a lot of additives and extracts, not natural.</p>
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