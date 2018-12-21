import React from 'react'
import {AppBar, Toolbar, Typography, InputBase, Button} from '@material-ui/core'
import {Search} from '@material-ui/icons'
import WordCard from './card/WordCard'
import CategoryCard from './card/CategorisCard'
import Categoris from './home/Categoris'
import MyCard from './card/CategoryCard2'
const style = {
  inputWrap: {
    borderRadius: 5,
    border: '1px solid black',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center'
  }
}

export default props =>
<div>
<div style={{display: 'flex', justifyContent: 'center'}}>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography style={{flexGrow: 1}}></Typography>
      <div style={style.inputWrap}>
        <div style={{marginRight: 10}}>
          <Search />
        </div>
        <InputBase
          placeholder="Search…"
        />
      </div>
      <Button variant="contained" color="primary" style={{padding: '13px 30px', marginLeft: 50}}>
        Primary
      </Button>
    </Toolbar>
  </AppBar>
</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
<MyCard />
<MyCard />
<CategoryCard />
<WordCard />
<Categoris />
<Categoris />
<Categoris />
<Categoris />
</div>
<MyCard />
</div>