import { Box, Button, Card, CardContent, InputAdornment, SvgIcon, TextField } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const ExecutorListToolbar = (props) => {
  const navigate = useNavigate();

  return <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        导入
      </Button>
      <Button sx={{ mx: 1 }}>
        导出
      </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={
          () => navigate('/app/new_executor')
        }
      >
        添加运行时
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SvgIcon
                      fontSize='small'
                      color='action'
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder='搜索运行时'
              variant='outlined'
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>;
};

export default ExecutorListToolbar;
