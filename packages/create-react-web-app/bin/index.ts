#!/usr/bin/env node

import { createWorkspace } from 'create-nx-workspace';
import { intro , text , select , outro } from "@clack/prompts"

async function main() {
  intro(" create-react-web-app >> A React App CLI by DJ!")
  
  let name = process.argv[2];
  
  // Ask User For Web App name
  if(!name){
    name=(await text({
      message:"Enter your Web App Name:",
      initialValue:"myapp",
      validate(value){
        if(value.length===0) return "Web app Name is Required!"
      }
    })) as string
  }

  if (!name) {
    throw new Error('Please provide a name for the Web Apps');
  }

  // Ask User for Default theme
  const defaultTheme=await select({
    message:"Web App Theme:",
    options:[
      { value:"light", label:"light mode"},
      { value:"dark", label:"dark mode"}
    ]
  })


  console.log(`Creating.... ${name}`);

  // This assumes "custom-cli-for-create-web-apps" and "create-web-apps" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version;

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(
    `create-react-web-app-cli@${presetVersion}`,
    {
      name,
      nxCloud: false,
      packageManager: 'npm',
      theme:defaultTheme
    }
  );
 outro(`Successfully created Your Web App: ${directory}.🎉. lets go.. 🔥`)
}
import { format } from 'path';

main();
