import React from 'react'
import { Grid } from '@mui/material';
import MainGridItem from './MainGridItem';
import ProductInformation from './ProductInformation';

export default function GridLayout() {
    return (
        <Grid container>
            <Grid item>
                <MainGridItem/>
            </Grid>

            <Grid item>
                <ProductInformation/>
            </Grid>
        </Grid>
    );
}