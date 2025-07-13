import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflow: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Trello" />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace" />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive" />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation" />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          max={2}
          sx={{
            '& .MuiAvatar-root' : {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="KhanhDang">
            <Avatar alt="Remy Sharp" src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-ea08-61f5-879a-19e5bbe14757/raw?se=2025-07-13T14%3A13%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=3c263c9a-3601-5e35-b513-17992ec84c44&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-13T10%3A00%3A48Z&ske=2025-07-14T10%3A00%3A48Z&sks=b&skv=2024-08-04&sig=Vlt9Z5tEqRClx/wBU1h7ji1YbKtt9d4P6jxcLuRZzcY%3D" />
          </Tooltip>
          <Tooltip title="KhanhDang">
            <Avatar alt="Remy Sharp" src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-ea08-61f5-879a-19e5bbe14757/raw?se=2025-07-13T14%3A13%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=3c263c9a-3601-5e35-b513-17992ec84c44&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-13T10%3A00%3A48Z&ske=2025-07-14T10%3A00%3A48Z&sks=b&skv=2024-08-04&sig=Vlt9Z5tEqRClx/wBU1h7ji1YbKtt9d4P6jxcLuRZzcY%3D" />
          </Tooltip>
          <Tooltip title="KhanhDang">
            <Avatar alt="Remy Sharp" src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-ea08-61f5-879a-19e5bbe14757/raw?se=2025-07-13T14%3A13%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=3c263c9a-3601-5e35-b513-17992ec84c44&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-13T10%3A00%3A48Z&ske=2025-07-14T10%3A00%3A48Z&sks=b&skv=2024-08-04&sig=Vlt9Z5tEqRClx/wBU1h7ji1YbKtt9d4P6jxcLuRZzcY%3D" />
          </Tooltip>
          <Tooltip title="KhanhDang">
            <Avatar alt="Remy Sharp" src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-ea08-61f5-879a-19e5bbe14757/raw?se=2025-07-13T14%3A13%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=3c263c9a-3601-5e35-b513-17992ec84c44&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-13T10%3A00%3A48Z&ske=2025-07-14T10%3A00%3A48Z&sks=b&skv=2024-08-04&sig=Vlt9Z5tEqRClx/wBU1h7ji1YbKtt9d4P6jxcLuRZzcY%3D" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
