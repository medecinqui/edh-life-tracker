# edh-life-tracker
a life tracker for games like magic the gathering (specifically multiplayer elder dragon highlander games)

## usage

* `init <name1> <name2> ... <namen> <life>`

   start a game with n named players at <life>
  
 * `<name> gain <amount>`, `<name> lose <amount>`, `<name> set <amount>`
 
   have player gain, lose, or set life

 * `<name1> to <name2> <amount>`
 
   <name2> takes <amount> commander damage from <name1> commander. note: does not work with multiple commanders
   
 * `<name1> <name2> ... <namen> gain/lose/set <amount>`
 
   multiple players have gain, lose, or set life applied to them
   
 * `<name> gain/lose/set <amount> <kind>`
 
   have player gain, lose, or set an <amount> of a <kind> of counter. note: cananot combine this and above feature
  
## future features

 * `everyone` and `everyonebut` command
 * `prettification`
    * player colors - WUBRG
 * multiple aliases for commands (if desired)
 * check whether there's any security issues
 