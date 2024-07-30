import { Card, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import { _mock } from "src/_mock";
import { MegaMenuDesktopVertical } from "src/components/mega-menu";
import { useProgramFacade } from "src/facade/program/useProgramFacade";

export default function ProgramsList() {
    const { programs } = useProgramFacade();
    
    const NAV_ITEMS = programs.map(p => ({
            title: p.name,
            path: `programs/${p.guid}`
        }));
  
    return(
        <Stack direction="row" spacing={3} mt={5}>
          <Card sx={{ width: 260, flexShrink: 0, overflow: 'unset', zIndex: 9 }}>
            <Typography variant="h6" sx={{ p: 2 }}>
              My Projects
            </Typography>
    
            <MegaMenuDesktopVertical data={NAV_ITEMS} />
          </Card>
    
          <div>
            <Box component="img" alt="any photo" src={_mock.image.cover(2)} sx={{ borderRadius: 1 }} />
          </div>
        </Stack>
    )
}