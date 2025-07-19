import React from 'react';
import './TreatmentPriceCard.scss';
import {Stack, Card, Typography, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";

export default function TreatmentPriceCard({category, index}) {
    return (
        <Stack justifyContent="center" alignItems="center" className={'treatment-container'} key={index}>
            <Card className={'price-card'}>
                <h5 className={'price-category-title'}>{category.category}</h5>

                <Table container rowSpacing={0} columnSpacing={5} className={'price-table'}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={'table-row'} align={'left'}>Behandlung</TableCell>
                            <TableCell className={'table-row'} align={'left'}>Preis</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {category.items.map((item, itemIndex) => (
                            <TableRow key={itemIndex}>
                                <TableCell>
                                    <div>
                                        <Typography className={''}>{item.name}</Typography>
                                        <Typography className={'card-price'}>{item.discount || ""}</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Typography className={'card-price'}>{item.price}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Stack>
    );
}
