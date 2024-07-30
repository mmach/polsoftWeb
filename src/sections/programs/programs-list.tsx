import { Stack } from "@mui/system";
import { Card, Typography } from "@mui/material";

import { useProgramFacade } from "src/facade/program/useProgramFacade";

import { MegaMenuDesktopVertical } from "src/components/mega-menu";

export default function ProgramsList() {
  const { programs, isListFatched } = useProgramFacade();

  if (!isListFatched) return <></>

  console.log(programs)
  const NAV_ITEMS = programs?.map(p => ({
    title: p.name,
    path: `/programs/${p.guid}`
  }));

  return (
    <Stack direction="row" spacing={3} mt={5}>
      <Card sx={{ width: 260, flexShrink: 0, overflow: 'unset', zIndex: 9 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          My Projects
        </Typography>
        <MegaMenuDesktopVertical data={NAV_ITEMS} />
      </Card>
    </Stack>
  )
}