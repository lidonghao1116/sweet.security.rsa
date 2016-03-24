var security = require('security')

var hbPubKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnaf6bHe76tz7yPQNj7TKmLiDk+ujB0jsJ9RDmxum0KMZVTFaphL8oWHncPBeih4Vt0F8pA6ian+kKd4AyO57W/0RBpSkCKoRVbeCKQM5yJ5fPovVAI+drBZDcqHVsPoauky86EhUGilAVulI+hByVddBZYMn+xg9WUI/7H1u+4p4nPzgO6PIIPWTDthnbfz7nsHtTa+9bfuDSLPTnV5lshn6GIrMmwAi2aNZICXyHuXpZS74pTnqbXFdZ/8iRnhz5DCmJBXFmxTdm7DY5mAmnhaGkaDScI+y7WTjGmxGEJxPdKIiES4IImnej9+G7BHrBCneSLDp994crQdHGXCdNwIDAQAB";
var privateKey = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdp/psd7vq3PvI9A2PtMqYuIOT66MHSOwn1EObG6bQoxlVMVqmEvyhYedw8F6KHhW3QXykDqJqf6Qp3gDI7ntb/REGlKQIqhFVt4IpAznInl8+i9UAj52sFkNyodWw+hq6TLzoSFQaKUBW6Uj6EHJV10Flgyf7GD1ZQj/sfW77inic/OA7o8gg9ZMO2Gdt/Puewe1Nr71t+4NIs9OdXmWyGfoYisybACLZo1kgJfIe5ellLvilOeptcV1n/yJGeHPkMKYkFcWbFN2bsNjmYCaeFoaRoNJwj7LtZOMabEYQnE90oiIRLggiad6P34bsEesEKd5IsOn33hytB0cZcJ03AgMBAAECggEAXatiFHQHSIHHbxvhutI11Qs70fUcxcVD2l45VLzXHfrpoD5Ul3uMce4TbnzCDtnVGS5leavgP9palS171eYrkPoI1ZoW47b32a/QO8HY4SOHf0fhZBXwHkCUDlWs+xt+KdZSHshqf6imu3ybiUegRvQ/vKpyZLOAL7o29LGJ8RTj2LzFIVgzllV6xoVEycLQdLp33VuiQcodsHy4Dv23Dr+6KwY0gJfXq3USlGpeGzW8Ezt7oxtPQJ+x+SosliGTAL6IUBUaJkkE1NBEshPAi9OymrOGAjy7LUAQnZPJEdzKZBdVNI/cU1O7fRMqtDHJdv4thRM4oGvkBTO2jhs1YQKBgQDLvv+Ozet/UXCW2GX746+ZH3+PEhAjdvxlcd59Dd6kFcbX7BJQ+4trT9VwpzBPh5uBKDLI9mWzZ/DMS9GVU0f7+XWL6n+95C2NydK0SxNcOV91z8QWVDbcZKnj36BR5PccWRWKJspLXM8gvWsz/xs3aCfnx5pB+KOwdorydLOVSQKBgQDGFu8rpoPnx6LaSbknV5oYYOsN2oHmbkGq6Xnh6q0sSUvNrC97bvxtWwqNMdsmPh1MGx2r2/awhQrWxLWG87N6i23e6x2zfDzaQTUJGK/aFUQ+nmX0SQk1+82kr/CBCgl/1wtNiCHoOM2s/8MMkactk04om3XzJYB6btgxIQMefwKBgB5DAiYtw5qnd/ePsKYXDU/K8+FGJ4t88sQGg6tDUhxA98W+VIIeunh35RXUX0KQu7IVTGW44yYgfA17/WcWdYyhYqojbFHCAFoc7eTFedyq0NjowREn9PYLJYipAGDphyJ4wNBCLq2+3SzZtYCFlX9HQxYT+X9u9LETClQ0rS+xAoGAPqqwvVFvd1r71Szvi1e2YzH+CqLu53RICAbWzTbN1C3X8lgfqWACMaJUozh7iQyrfhEyANWUpGFifXE7sFbWl9UWTCh7e/W41p88ZQVPVKHXtiusO20DofVoKEqUvm3rdWsVo1CG0Y1u2+UJ0qcdiViJqGUOGn7pt1HryRcVgocCgYACxeW/glc9VdYWdRK5W7/zsH2+xUp80dK06Si5+oi7nxKoaFq2AalAFRgQIQqC5CgmcwoFE5T1T16IexQDI2hPO2AImiPoDBvCvib3KyojhRY/LQNH9OMlsQXELljTAE79vMg3HvlrKWNJg7siHA9cFmaJXRgFIxdpQ9fMRrJ7ng==";


// keyWorker.encrypt()
var pubKey = security.keyWorker(hbPubKey)
var priKey = security.keyWorker(privateKey)
var message = 'hello java'
// var message = '1--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------hello nodejs--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------1'
console.log(Object.keys(pubKey))

console.log('测试RSA加密')
var encrypted = pubKey.encrypt(message)
console.log(encrypted)

console.log('测试RSA解密')
var decrypted = priKey.decrypt(encrypted)
console.log(decrypted)

console.log('测试RSA签名')
var sign = priKey.sign(message);
console.log(sign)

console.log('测试RSA验签')
var verify = pubKey.verify(message,sign)
console.log(verify)

console.log('==== 测试通过 ====')