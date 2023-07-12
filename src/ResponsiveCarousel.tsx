import { Box, useTheme } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import Carousel from "react-material-ui-carousel";

function sliceIntoChunks(arr: string[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const itemPerPage = 4;

const ResponsiveCarousel: React.FC<{ items: string[] }> = ({ items }) => {

    const list = useMemo(() => {
        return sliceIntoChunks(items, itemPerPage);
    }, [items]);

    return <Carousel
        navButtonsAlwaysInvisible
        autoPlay
        animation="fade"
    >
        {
            list.map((value) => (
                <CarouselItemContainer
                    items={value}
                />
            ))
        }
    </Carousel>
}

const CarouselItemContainer: React.FC<{ items: string[] }> = (
    { items }
) => {

    console.log(items);

    return <Stack direction='row' spacing={2} justifyContent='center'>
        {
            items.map((img) => (
                <img
                    src={img}
                />
            ))
        }
    </Stack>
}

export default ResponsiveCarousel;