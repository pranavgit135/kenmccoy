# VPN Connection Instructions

## Your VPN Details
- **VPN URL**: https://122.170.113.117
- **Username**: amar
- **Password**: Pass@123456

## Connection Methods

### Method 1: Sophos Connect Client (Recommended for Windows)

**You're currently on the Sophos VPN portal! Here's what to do next:**

1. **Download Sophos Connect Client:**
   - On the VPN portal page, click **"Download for Windows"** under "Sophos Connect client"
   - The installer will download to your computer

2. **Install Sophos Connect:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Accept any security prompts

3. **Download VPN Configuration:**
   - On the VPN portal, under "VPN configuration" → "SSL VPN configuration"
   - Click **"Download for Windows, macOS, Linux"** (the first one - for Sophos Connect and OpenVPN Connect v2)
   - This will download a `.ovpn` or `.scx` configuration file

4. **Import Configuration in Sophos Connect:**
   - Open the **Sophos Connect** application (should be in Start Menu)
   - Click **"Import"** or **"Add Connection"**
   - Select the downloaded configuration file
   - Enter your credentials:
     - Username: `amar`
     - Password: `Pass@123456`

5. **Connect:**
   - Click **"Connect"** in Sophos Connect
   - Wait for connection status to show "Connected" ✅

### Method 2: OpenVPN Connect (Alternative)

If you prefer OpenVPN Connect:

1. **Download OpenVPN Connect:**
   - Windows: https://openvpn.net/client-connect-vpn-for-windows/

2. **Download VPN Configuration:**
   - On the VPN portal, click **"Download for Windows, macOS, Linux"** (for OpenVPN Connect v2 or v3)
   - Save the `.ovpn` file

3. **Import in OpenVPN Connect:**
   - Open OpenVPN Connect
   - Import the `.ovpn` file
   - Enter credentials when prompted:
     - Username: `amar`
     - Password: `Pass@123456`

4. **Connect**

### Method 2: OpenVPN Client (If they provide .ovpn file)

If the client provides an `.ovpn` configuration file:

1. **Download OpenVPN Client:**
   - Windows: https://openvpn.net/client-connect-vpn-for-windows/
   - Mac: https://openvpn.net/client-connect-vpn-for-mac-os/
   - Linux: `sudo apt-get install openvpn`

2. **Import the .ovpn file:**
   - Open OpenVPN client
   - Import the configuration file
   - Enter credentials when prompted

3. **Connect:**
   - Click connect
   - Enter username: `amar`
   - Enter password: `Pass@123456`

### Method 3: Windows Built-in VPN

1. **Open Settings** → **Network & Internet** → **VPN**

2. **Add VPN Connection:**
   - VPN provider: Windows (built-in)
   - Connection name: Client VPN
   - Server name: `122.170.113.117`
   - VPN type: IKEv2 or L2TP/IPsec (ask client which one)
   - Username: `amar`
   - Password: `Pass@123456`

3. **Connect**

## Verify VPN Connection

Once connected, test if you can reach the server:

**Windows (Command Prompt or PowerShell):**
```bash
ping 192.168.2.21
```

**Linux/Mac:**
```bash
ping 192.168.2.21
```

If you get responses, VPN is working! ✅

## Troubleshooting

### Can't access the VPN URL
- Check if the URL is correct: `https://122.170.113.117`
- Try `http://122.170.113.117` (without https)
- Check if you need to be on a specific network first
- Contact client for VPN access instructions

### Login fails
- Double-check username: `amar`
- Double-check password: `Pass@123456` (case-sensitive)
- Try resetting password or contact client

### Can't ping server after VPN connection
- Verify VPN is actually connected (check status)
- Check if firewall is blocking ping
- Verify server IP: `192.168.2.21`
- Contact client to verify VPN configuration

### Connection drops
- Check your internet connection
- Reconnect to VPN
- Check if VPN has time limits
- Contact client if issues persist

## Next Steps

Once VPN is connected:
1. ✅ Verify: `ping 192.168.2.21` works
2. ✅ Connect to server: `ssh web@192.168.2.21`
3. ✅ Proceed with deployment steps

