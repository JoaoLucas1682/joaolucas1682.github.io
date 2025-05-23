console.log("JoaoLucas1682 StopBot.js | joaolucas1682.github.io");

var userAgent = navigator.userAgent;
let agentesBloqueados = [
            "headlesschrome", "phantomjs", "bot", "crawler", "googlebot",
            "bingbot", "duckduckbot", "yandexbot", "baiduspider", "gptbot",
            "claudebot", "perplexitybot", "mistralai-user/1.0", "chatgpt-user/1.0",
            "bytespider", "ccbot", "amazonbot", "duckassistbot", "scrapy",
            "mj12bot", "ahrefsbot", "semrushbot", "dotbot", "sqlmap", "nikto",
            "zgrab", "masscan", "nmap", "screaming frog seo spider", "httrack",
            "ezooms", "xovibot", "seznambot", "megaindex", "cliqzbot",
            "censysinspect", "shodanbot", "zoominfobot", "sogou spider",
            "applebot", "discordbot", "facebookexternalhit", "telegrambot",
            "twitterbot", "adsbot-google", "scraper", "fetcher", "scanner",
            "robot", "spammer", "client", "reaper", "b0t"
        ];

        function verificarUserAgent() {
            return !agentesBloqueados.some(agente => userAgent.includes(agente));
        }

        if (verificarUserAgent() == false) {
          console.log("[BLOCKED] Bot detected. stopping page");
          window.stop();
        } else { console.log("No bot detected"); }
