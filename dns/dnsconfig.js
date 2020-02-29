var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_GCLOUD = NewDnsProvider("gcloud", "GCLOUD");

D('f110.dev', REG_NONE, DnsProvider(DNS_GCLOUD),
    NAMESERVER_TTL('6h'),
    DefaultTTL('300s'),
    A('local-proxy', '127.0.0.1'),
    A('*.local-proxy', '127.0.0.1'),
    A('registry', '60.69.247.138'),
    A('x', '60.69.247.138'),
    A('*.x', '60.69.247.138'),
    A('static-discord-bot', '60.69.247.138'),
    A('vpn', '60.69.247.138'),
    A('dns', '60.69.247.138'),
    A('bot-object', '60.69.247.138'),
    A("test", "192.168.0.1")
);
