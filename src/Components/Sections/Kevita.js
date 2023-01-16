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

export default function KevitaDrinks() {
    const data = [
        {
            "rating": "2.5",
            "brand": "KeVita Master Brew",
            "name": "Tart Cherry",
            "profile": "fruit, spice",
            "comments": "Not the worst I've ever had, but cherry and ginger do not go together...",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "KeVita Master Brew",
            "name": "Pineapple Peach",
            "profile": "fruit, spice",
            "comments": "pretty good....",
            "repurchase": "Yes",
        },
        {
            "rating": "3",
            "brand": "KeVita Master Brew",
            "name": "Raspberry Lemonade",
            "profile": "fruit, citrus, spice",
            "comments": "ehhhhhhh...",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Lemon Ginger",
            "profile": "citrus, spice",
            "comments": "not bad, but there are much better ginger lemon drinks available.",
            "repurchase": "Maybe",
        },
        {
            "rating": "4",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Mango Coconut",
            "profile": "fruit, coconut",
            "comments": "describe other",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "KeVita Sparkling Probiotic",
            "name": "pomegranate",
            "profile": "fruit",
            "comments": "very good.....",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "KeVita Sparkling Probiotic",
            "name": "Strawberry Acai Coconut",
            "profile": "fruit, coconut",
            "comments": "Good flavor.....",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="kevita-brand">
            <h2 className="brand-h2">
                KeVita
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
                                            icon={<FavoriteIcon fontSize="inherit" />}
                                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
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