var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_GCLOUD = NewDnsProvider("gcloud", "GCLOUD");

D('f110.dev', REG_NONE, DnsProvider(DNS_GCLOUD),
    NAMESERVER_TTL('6h'),
    DefaultTTL('300s'),
    A('local-proxy', '127.0.0.1')
);
