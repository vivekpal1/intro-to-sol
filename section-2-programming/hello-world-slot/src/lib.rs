use anchor_lang::prelude::*;

declare_id!("INSERT_YOUR_PROGRAM_ID_HERE");

#[program]
mod hello_world {
    use super::*;

    pub fn hello(_ctx: Context<Hello>) -> Result<()> {
        let clock = Clock::get()?;
        msg!("Hello, World! Current slot is {}", clock.slot);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Hello {}