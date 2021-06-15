import { makeStyles, Grid } from "@material-ui/core";
import { useContext } from "react";
import MainContext from "../context/mainContext";
import UserContext from "../context/userContext";
import Table from './Table'

const useStyles = makeStyles((theme) => ({
    body: {
        paddingTop: 100
    }
}));

export default function Body() {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const { apiData } = useContext(MainContext);
    console.log(apiData);
    return (
        <div className={classes.body}>
            {user?.name.length ? <h1>{`Bienvenido ${user.name}`}</h1> : <h1>Bienvenido</h1>}
            {apiData.length &&
                <Grid container spacing={2} justify='center'>
                    {apiData.map(dogImg => (
                        <Grid item key={dogImg}>
                            <img style={{
                                width: 400,
                                height: 400
                            }} src={dogImg} alt="" />
                        </Grid>
                    ))}
                </Grid>
            }
            <Grid container justify='center'>
                <Grid item xs={2}>
                    <Table title='Clientes' />
                </Grid>
                <Grid item xs={2}>
                    <Table title='Administración' />
                </Grid>
                <Grid item xs={2}>
                    <Table title='Ubicación' />
                </Grid>
                <Grid item xs={2}>
                    <Table title='Transporte' />
                </Grid>
                <Grid item xs={2}>
                    <Table title='Finanzas' />
                </Grid>
            </Grid>
        </div>
    )
}

