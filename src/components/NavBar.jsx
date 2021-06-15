import { AppBar, Grid, Button, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "../context/userContext";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 1, 1, 1)
    }
}))

export default function NavBar() {
    const { setUser } = useContext(UserContext);
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <Grid container justify='flex-start'>
                            <Grid item>
                                <Typography style={{
                                    color: '#fff'
                                }}
                                    variant='h6'

                                >
                                    Bienvenido
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify='flex-end'>
                            <Grid item>
                                <Button style={{
                                    textTransform: 'none',
                                    color: '#fff'
                                }}
                                    onClick={() => setUser({ name: 'Carlos', id: 1 })}
                                >
                                    Iniciar Sesión
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    )
}

