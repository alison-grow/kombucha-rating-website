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


export default function HealthDrinks() {
    const data = [
        {
            "rating": "4.5",
            "brand": "Health-Ade",
            "name": "Pineapple Creamsicle",
            "profile": "fruit, cream",
            "comments": "very good, sadly it is limited edition. Won't be around for long.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Holiday Cheers",
            "profile": "spice",
            "comments": "pretty good...",
            "repurchase": "Yes",
        },
        {
            "rating": "3.5",
            "brand": "Health-Ade",
            "name": "Pink Lady Apple",
            "profile": "fruit",
            "comments": "pretty good....",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Pomegranate",
            "profile": "fruit",
            "comments": "very good...",
            "repurchase": "Yes",
        },
        {
            "rating": "2",
            "brand": "Health-Ade",
            "name": "Bubbly Rose",
            "profile": "floral",
            "comments": "not great...",
            "repurchase": "No",
        },
        {
            "rating": "3.5",
            "brand": "Health-Ade",
            "name": "Tropical Punch",
            "profile": "fruit",
            "comments": "pretty good....",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Passionfruit Tangerine",
            "profile": "fruit, citrus",
            "comments": "pretty good....",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Ginger Lemon",
            "profile": "spice, citrus",
            "comments": "very medicinal, STRONG ginger flavor. great remedy for an upset stomach.",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Blood-Orange Carrot Ginger",
            "profile": "citrus, spice",
            "comments": "pretty good",
            "repurchase": "Yes",
        },
        {
            "rating": "4",
            "brand": "Health-Ade",
            "name": "Watermelon",
            "profile": "fruit",
            "comments": "pretty good...",
            "repurchase": "Yes",
        },
        {
            "rating": "2.5",
            "brand": "Health-Ade",
            "name": "Strawberry Glow",
            "profile": "fruit",
            "comments": "not bad but nothing special either",
            "repurchase": "No",
        },
    ];
    return (
        <div className="health-brand">
            <h2 className="brand-h2">
                Health-Ade
            </h2>
            <TableContainer className="container" component={Paper} sx={{ width: 1000, margin: 'auto' }}>
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