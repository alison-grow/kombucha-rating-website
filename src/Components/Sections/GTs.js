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
            "comments": "unique flavor, passionfruit and blackberry. very delicious!",
            "rating": "4.5",
            "repurchase": "yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Peach Paradise",
            "profile": "fruit",
            "comments": "tastes like a fresh peach. one of the best flavors!",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerberry",
            "profile": "fruit, spice",
            "comments": "ginger, turmeric, and blueberry. not the best but not the worst.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Guava Goddess",
            "profile": "fruit",
            "comments": "just guava. not bad, but has a strong fermented flavor.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Golden Pineapple",
            "profile": "fruit, citrus, sage",
            "comments": "pineapple, lemon, and sage. tastes like a fresh cut pineapple. one of the best flavors!",
            "rating": "5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Lemon Berry",
            "profile": "fruit, citrus",
            "comments": "lemon, lime, and a berry mixture. very delicious, tastes like fresh lemonade!",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Watermelon Wonder",
            "profile": "fruit, citrus",
            "comments": "watermelon, cherry, and lime. very tasty but has a strong fermented flavor",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Sacred Life",
            "profile": "spice, coconut, other",
            "comments": "ginger, coconut, and blue spirulina. unique tasty flavor and bright blue color!",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Tangerine Dream",
            "profile": "citrus, other",
            "comments": "tangerine, lemon, vanilla. pretty good, tastes like orange juice.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Mystic Mango",
            "profile": "fruit",
            "comments": "just mango. pretty tasty, with a strong fermented flavor.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Living In Gratitude",
            "profile": "spice, fruit, other",
            "comments": "apple, carrot, turmeric, and spices. tastes like a fall cider. delicious but limited edition!",
            "rating": "4.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Unity",
            "profile": "fruit, coconut, other",
            "comments": "cherry, coconut, lemongrass and vanilla. pretty good but limited edition!",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Carrot Turmeric",
            "profile": "spice, other",
            "comments": "carrot, ginger, and turmeric. very good for an upset stomach.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Hibiscus Ginger",
            "profile": "floral, spice",
            "comments": "hibiscus flower and ginger. flowers do not taste good, and don't pair well with ginger.",
            "rating": "1.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Raspberry Chia",
            "profile": "fruit",
            "comments": "raspberry and chia seeds. the seeds add a great texture and more fiber!",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Serenity",
            "profile": "fruit",
            "comments": "just strawberry. very strong fermented flavor, not sweet enough. strawberry flavor is bland",
            "rating": "1.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Strawberry Lemonade",
            "profile": "fruit, citrus",
            "comments": "strawberry, lemon, lime. much better than regular strawberry, the citrus really helps.",
            "rating": "4",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Pink Lady Apple",
            "profile": "fruit, other",
            "comments": "apple and basil. basil flavor is weak. tastes good, but boring, like apple juice.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Cosmic Cranberry",
            "profile": "fruit",
            "comments": "just cranberry. very tart, tasty. a little strong fermented flavor.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
        {
            "brand": "GT's Synergy",
            "name": "Multi-Green",
            "profile": "other",
            "comments": "multiple types of green algae. very healthy but bland flavor.",
            "rating": "2.5",
            "repurchase": "No",
        },
        {
            "brand": "GT's Synergy",
            "name": "Gingerade",
            "profile": "spice",
            "comments": "just ginger. also good for an upset stomach, tastes alright.",
            "rating": "3.5",
            "repurchase": "Yes",
        },
    ];
    return (
        <div className="gts-brand">
            <h2 className="brand-h2">
                ~ GT's ~
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