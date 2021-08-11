const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process ) => {
    return `

  ❛ ━━━･【 USUARIO 】･━━━ ❜ 
    ➫ Prefix: 「  ${prefix}  」
    ➫ Nome: ${pushname}
    ➫ Tipo: ${premi}
    ➫ Dinhero: *${uangku}*
    ➫ Tag: @${sender.split("@")[0]}
    ➫ Patente: *${role}*
    ➫ Nível: ${getLevelingLevel(sender)}
    ➫ Xp: ${getLevelingXp(sender)}
    ➫ Usuários registrados: ${_registered.length}
   ━━━━━━━【✪】━━━━━━━
   
   ❛ ━━━･【 MENUS 】･━━━ ❜ 

    ➫ *menugp*
   ━━━━━━【✪】━━━━━━
    ➫ *menusp*
   ━━━━━━【✪】━━━━━━
    ➫ *menumk*
   ━━━━━━【✪】━━━━━━
    ➫ *menunv*
   ━━━━━━【✪】━━━━━━
    ➫ *menulvl*
   ━━━━━━【✪】━━━━━━
    ➫ *menulvl*
   ━━━━━━【✪】━━━━━━
    ➫ *menuinfo*
   ━━━━━━【✪】━━━━━━
    ➫ *menugm*
   ━━━━━━【✪】━━━━━━
    ➫ *menufs*
   ━━━━━━【✪】━━━━━━
    ➫ *menufun*
   ━━━━━━【✪】━━━━━━
    ➫ *menusr*
   ━━━━━━【✪】━━━━━━


❛ ━━━･【 INFO DO BOT 】･━━━ ❜ 
*➫Nome :*${client.user.name}
*➫Navegador :*${client.browserDescription[1]}
*➫Servidor :*${client.browserDescription[0]}
*➫Bateria :*${JSON.stringify(baterai)}%
*➫Versão :*${client.browserDescription[2]}
*➫Velocidade :*${process.uptime()}
*➫Celular :*${client.user.phone.device_manufacturer}
*➫Versão do whatsapp :*${client.user.phone.wa_version}
━━━━━━━【✪】━━━━━━━
`
}
exports.help = help




