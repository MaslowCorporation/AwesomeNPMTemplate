const chatModels = ["gpt-4", "gpt-4-32k", "gpt-3.5-turbo"];
const completionModels = ["text-davinci-003"];

/**
 * Ici, on stocke les constantes utiles dans notre template de question
 */
export const Constants = {
  completionModels: completionModels,

  chatModels: chatModels,

  allModels: completionModels.concat(chatModels),

  // l'url de debug local
  // si tu teste en enviroonnement react native, et que
  // ton phone est sur le meme réseau que ton ordi,
  // ou si tu test dans un environnement node.js
  api_base_url_local: "http://localhost:8080",

  // l'url de debug tailscale,
  // si tu teste en enviroonnement react native, et que
  // ton phone n'est pas sur le meme réseau que ton ordi,
  // remplace si besoin cette ip par l'ip tailscale
  // de ton ordi (w10, ubuntu, macos etc...)
  api_base_url_tailscale: "http://TAILSCALE_IP:8080",

  // l'url de debug de production (l'url du serveur Linode)
  // for ze world wide web
  api_base_url_web: "https://YOUR_SERVER_URL",

  MASLOW_GPT_API_KEY: "16504dcc6bf00403ed8b9fff549f0d75"
};
