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


export default function HealthDrinks() {
    const data = [
        {
            "rating": "5",
            "brand": "Health-Ade",
            "name": "Pineapple Creamsicle",
            "profile": "fruit, other",
            "comments": "Pineapple and vanilla. Very good, tastes like pineapple ice cream! Possibly the best Health-Ade flavor. Sadly it's limited edition.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Holiday Cheers",
            "profile": "spice",
            "comments": "Ginger and allspice. Pretty good holiday seasonal flavor, tastes the way christmas feels.",
            "repurchase": "Yes",
        },
        {
            "rating": "3",
            "brand": "Health-Ade",
            "name": "Pink Lady Apple",
            "profile": "fruit",
            "comments": "Just apple. Not bad, but it's boring, like apple juice, with less flavor than GT's apple drink.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Pomegranate",
            "profile": "fruit",
            "comments": "Just pomegranate. Very tasty, but could be better if the flavor was a little stronger.",
            "repurchase": "Yes",
        },
        {
            "rating": "2",
            "brand": "Health-Ade",
            "name": "Bubbly Rose",
            "profile": "floral, fruit",
            "comments": "Rose, mangosteen and hawthorn berries. Flowers do not taste good!",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "Health-Ade",
            "name": "Tropical Punch",
            "profile": "fruit",
            "comments": "Pineapple, orange, and mango. Tasty, but there are more interesting flavors out there.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Passionfruit Tangerine",
            "profile": "fruit, citrus",
            "comments": "Passionfruit, orange, and tangerine. Pretty good, the passionfruit gives it a unique flavor.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Ginger Lemon",
            "profile": "spice, citrus",
            "comments": "Very medicinal, STRONG ginger flavor. Great remedy for an upset stomach.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Blood-Orange Carrot Ginger",
            "profile": "citrus, spice",
            "comments": "Blood orange, carrot, and ginger. Pretty good flavor, orange and carrot go well together.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Watermelon",
            "profile": "fruit",
            "comments": "Just watermelon. Good flavor, tastes like summer. Less fermented-tasting than the GT's watermelon.",
            "repurchase": "Yes",
        },
        {
            "rating": "3",
            "brand": "Health-Ade",
            "name": "Strawberry Glow",
            "profile": "fruit, other",
            "comments": "Kiwi, strawberry, and bamboo. Bamboo supposedly has added benefits. Not bad but not special either.",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="health-brand">
            <h2 className="brand-h2">
                ~ Health-Ade ~
                <p className="brand-p">my second-favorite brand. pretty good flavors but they aren't as traditional as GT's</p>
            </h2>
            {/* <TableContainer className="container" component={Paper} sx={{ width: 1000, margin: 'auto' }}>
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
            </TableContainer> */}
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