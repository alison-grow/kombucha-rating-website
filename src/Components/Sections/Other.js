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


export default function OtherDrinks() {
    const data = [
        {
            "rating": "1",
            "brand": "Humm Zero Sugar",
            "name": "Blood Orange",
            "profile": "fruit",
            "comments": "Blood orange and grape juice. Sugar free, tastes terrible and fake. This cannot be real kombucha. Do Not Buy!!!",
            "repurchase": "No",
        },
        {
            "rating": "1",
            "brand": "Humm Zero Sugar",
            "name": "Ginger Lemonade",
            "profile": "spice, citrus",
            "comments": "Ginger, lemon, grape juice. Fake tasting. Horrible, not real kombucha. Avoid Humm Zero Sugar drinks!",
            "repurchase": "No",
        },
        {
            "rating": "4",
            "brand": "Brew Dr.",
            "name": "Watermelon",
            "profile": "fruit",
            "comments": "Watermelon and guava. Watermelon is always a good flavor to me, and this one is a good one!",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Brew Dr.",
            "name": "Clear Mind",
            "profile": "spice, mint",
            "comments": "Rosemary, mint, sage. Made with green tea instead of black. Very refreshing, I see why it's called Clear Mind. A go to Brew Dr. flavor!",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="other-drinks">
            <h2 className="brand-h2">
                ~ Other Drinks ~
                <p className="brand-p">all the other drinks i've tried!</p>
            </h2>
            <TableContainer className="container" component={Paper} sx={{ width: 1100, margin: 'auto'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ height: 130 }}>
                            <TableRow className="table-head-row">
                                <TableCell>
                                    <Typography sx={{fontFamily: "'little', cursive"}} className="tablecell-1">Brand</Typography>
                                </TableCell>
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
                                        <TableCell className="tablecell-2" component="th" scope="row">
                                            {data.brand}
                                        </TableCell>
                                        <TableCell className="tablecell-2" align="left">{data.name}</TableCell>
                                        <TableCell className="tablecell-2" align="left">{data.profile}</TableCell>
                                        <TableCell className="rate" align="left">
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