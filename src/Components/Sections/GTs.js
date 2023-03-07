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
            "comments": "Passionfruit and blackberry. Very delicious, unique flavor. You will be in a state of bliss with this drink!",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Peach Paradise",
            "profile": "fruit",
            "comments": "Peach and papaya. Unique flavor, tastes like biting into a fresh peach on a tropical island. One of the best flavors!",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerberry",
            "profile": "fruit, spice",
            "comments": "Ginger, turmeric, and blueberry. Not the best but not the worst, kinda boring. There are better GT's flavors out there!",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Guava Goddess",
            "profile": "fruit",
            "comments": "Just guava. Not bad, but has a strong fermented flavor.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Golden Pineapple",
            "profile": "fruit, citrus, sage",
            "comments": "Pineapple, lemon, and sage. Tastes like a fresh cut pineapple, including the bromelain enzyme 'bite'. One of the best flavors!",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Lemon Berry",
            "profile": "fruit, citrus",
            "comments": "Lemon, lime, and a berry mixture. Very delicious, tastes like fresh homemade lemonade! The lemon flavor is strong!",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Watermelon Wonder",
            "profile": "fruit, citrus",
            "comments": "Watermelon, cherry, and lime. Very tasty but has a strong fermented flavor. Cherry and lime are almost undetectable.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Sacred Life",
            "profile": "spice, coconut, other",
            "comments": "Ginger, coconut, and blue spirulina. Unique hard-to-describe flavor with bright blue color! Very tasty, always a go-to",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Tangerine Dream",
            "profile": "citrus, other",
            "comments": "Tangerine, lemon, vanilla. Pretty good, just tastes like orange juice.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Mystic Mango",
            "profile": "fruit",
            "comments": "Just mango. Pretty tasty, fresh flavor, with a strong fermented taste.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Living In Gratitude",
            "profile": "spice, fruit, other",
            "comments": "Apple, carrot, turmeric, and spices. Tastes like drinking a fall cider on a rainy November day. Delicious but limited edition!",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Unity",
            "profile": "fruit, coconut, other",
            "comments": "Cherry, coconut, lemongrass and vanilla. Pretty good, unique, could be better without the coconut though. Limited edition!",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Carrot Turmeric",
            "profile": "spice, other",
            "comments": "Carrot, ginger, and turmeric. Tastes like an energy shot. Very good for an upset stomach.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Hibiscus Ginger",
            "profile": "floral, spice",
            "comments": "Hibiscus flower and ginger. Flowers don't taste good, and don't pair well with ginger.",
            "rating": "1.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Raspberry Chia",
            "profile": "fruit",
            "comments": "Raspberry and chia seeds. The seeds add a great texture and more fiber!",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Serenity",
            "profile": "fruit",
            "comments": "Just strawberry. Very strong fermented flavor, not sweet enough. Doesn't even taste like strawberry to me. Possibly the worst GT's flavor",
            "rating": "1",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Lemonade",
            "profile": "fruit, citrus",
            "comments": "Strawberry, lemon, lime. Much better than the regular strawberry, the citrus really helps cover the bland strawberries. Lemon covers the over-fermented taste.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Pink Lady Apple",
            "profile": "fruit, other",
            "comments": "Apple and basil. Basil flavor is weak. Tastes good, but kinda boring, like apple juice.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Cosmic Cranberry",
            "profile": "fruit",
            "comments": "Just cranberry. Very tart, tastes like a cold winter day. A little strong fermented flavor.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Multi-Green",
            "profile": "other",
            "comments": "Multiple types of green algae. Very healthy but bland flavor.",
            "rating": "2.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerade",
            "profile": "spice",
            "comments": "Just ginger. Good for an upset stomach, tastes alright but not special.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Elderberry Juniper",
            "profile": "fruit, spice",
            "comments": "Elderberry and juniper. Very unique flavor, the elderberry is not too strong and the juniper pairs perfectly. Hard to find",
            "rating": "4",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="gts-brand">
            <h2 className="brand-h2">
                ~ GT's ~
                <p className="brand-p">the *ultimate* kombucha brand. raw, natural, with the most probiotics</p>
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