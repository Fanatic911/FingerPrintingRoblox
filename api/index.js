module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const data = req.body
    console.log("[Fingerprint] Données reçues :", JSON.stringify(data, null, 2))

    return res.status(200).json({ success: true })
}