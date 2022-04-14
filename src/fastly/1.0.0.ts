const completion: Fig.Subcommand = {
  name: "fastly",
  description: "A CLI for interacting with the Fastly platform",
  subcommands: [
    {
      name: "acl",
      description: "Manipulate Fastly ACLs (Access Control Lists)",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new ACL attached to the specified service version",
          options: [
            {
              name: "--name",
              description:
                "Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace",
              args: {
                name: "name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an ACL from the specified service version",
          options: [
            {
              name: "--name",
              description: "The name of the ACL to delete",
              args: {
                name: "name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Retrieve a single ACL by name for the version and service",
          options: [
            {
              name: "--name",
              description: "The name of the ACL",
              args: {
                name: "name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List ACLs",
          options: [
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update an ACL for a particular service and version",
          options: [
            {
              name: "--name",
              description: "The name of the ACL to update",
              args: {
                name: "name",
              },
            },
            {
              name: "--new-name",
              description: "The new name of the ACL",
              args: {
                name: "new-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "acl-entry",
      description: "Manipulate Fastly ACL (Access Control List) entries",
      subcommands: [
        {
          name: "create",
          description: "Add an ACL entry to an ACL",
          options: [
            {
              name: "--acl-id",
              description: "Alphanumeric string identifying a ACL",
              args: {
                name: "acl-id",
              },
            },
            {
              name: "--ip",
              description: "An IP address",
              args: {
                name: "ip",
              },
            },
            {
              name: "--comment",
              description: "A freeform descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--negated",
              description: "Whether to negate the match",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--subnet",
              description:
                "Number of bits for the subnet mask applied to the IP address",
              args: {
                name: "subnet",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an ACL entry from a specified ACL",
          options: [
            {
              name: "--acl-id",
              description: "Alphanumeric string identifying a ACL",
              args: {
                name: "acl-id",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying an ACL Entry",
              args: {
                name: "id",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "describe",
          description: "Retrieve a single ACL entry",
          options: [
            {
              name: "--acl-id",
              description: "Alphanumeric string identifying a ACL",
              args: {
                name: "acl-id",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying an ACL Entry",
              args: {
                name: "id",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List ACLs",
          options: [
            {
              name: "--acl-id",
              description: "Alphanumeric string identifying a ACL",
              args: {
                name: "acl-id",
              },
            },
            {
              name: "--direction",
              description: "Direction in which to sort results",
              args: {
                name: "direction",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--page",
              description: "Page number of data set to fetch",
              args: {
                name: "page",
              },
            },
            {
              name: "--per-page",
              description: "Number of records per page",
              args: {
                name: "per-page",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--sort",
              description: "Field on which to sort",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update an ACL entry for a specified ACL",
          options: [
            {
              name: "--acl-id",
              description: "Alphanumeric string identifying a ACL",
              args: {
                name: "acl-id",
              },
            },
            {
              name: "--comment",
              description: "A freeform descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--file",
              description:
                "Batch update json passed as file path or content, e.g. $(< batch.json)",
              args: {
                name: "file",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying an ACL Entry",
              args: {
                name: "id",
              },
            },
            {
              name: "--ip",
              description: "An IP address",
              args: {
                name: "ip",
              },
            },
            {
              name: "--negated",
              description: "Whether to negate the match",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--subnet",
              description:
                "Number of bits for the subnet mask applied to the IP address",
              args: {
                name: "subnet",
              },
            },
          ],
        },
      ],
    },
    {
      name: "auth-token",
      description: "Manage API tokens for Fastly service users",
      subcommands: [
        {
          name: "create",
          description: "Create an API token",
          options: [
            {
              name: "--password",
              description:
                "User password corresponding with --token or $FASTLY_API_TOKEN",
              args: {
                name: "password",
              },
            },
            {
              name: "--expires",
              description: "Time-stamp (UTC) of when the token will expire",
              args: {
                name: "expires",
              },
            },
            {
              name: "--name",
              description: "Name of the token",
              args: {
                name: "name",
              },
            },
            {
              name: "--scope",
              description: "Authorization scope (repeat flag per scope)",
              args: {
                name: "scope",
              },
            },
            {
              name: "--services",
              description:
                "A comma-separated list of alphanumeric strings identifying services (default: access to all services)",
              args: {
                name: "services",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Revoke an API token",
          options: [
            {
              name: "--current",
              description: "Revoke the token used to authenticate the request",
            },
            {
              name: "--file",
              description:
                "Revoke tokens in bulk from a newline delimited list of tokens",
              args: {
                name: "file",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying a token",
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: "describe",
          description: "Get the current API token",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
          ],
        },
        {
          name: "list",
          description: "List API tokens",
          options: [
            {
              name: "--customer-id",
              description:
                "Alphanumeric string identifying the customer (falls back to FASTLY_CUSTOMER_ID)",
              args: {
                name: "customer-id",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
          ],
        },
      ],
    },
    {
      name: "backend",
      description: "Manipulate Fastly service version backends",
      subcommands: [
        {
          name: "create",
          description: "Create a backend on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Backend name",
              args: {
                name: "name",
              },
            },
            {
              name: "--address",
              description: "A hostname, IPv4, or IPv6 address for the backend",
              args: {
                name: "address",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--port",
              description: "Port number of the address",
              args: {
                name: "port",
              },
            },
            {
              name: "--override-host",
              description: "The hostname to override the Host header",
              args: {
                name: "override-host",
              },
            },
            {
              name: "--connect-timeout",
              description: "How long to wait for a timeout in milliseconds",
              args: {
                name: "connect-timeout",
              },
            },
            {
              name: "--max-conn",
              description: "Maximum number of connections",
              args: {
                name: "max-conn",
              },
            },
            {
              name: "--first-byte-timeout",
              description:
                "How long to wait for the first bytes in milliseconds",
              args: {
                name: "first-byte-timeout",
              },
            },
            {
              name: "--between-bytes-timeout",
              description: "How long to wait between bytes in milliseconds",
              args: {
                name: "between-bytes-timeout",
              },
            },
            {
              name: "--auto-loadbalance",
              description:
                "Whether or not this backend should be automatically load balanced",
            },
            {
              name: "--weight",
              description:
                "Weight used to load balance this backend against others",
              args: {
                name: "weight",
              },
            },
            {
              name: "--request-condition",
              description:
                "Condition, which if met, will select this backend during a request",
              args: {
                name: "request-condition",
              },
            },
            {
              name: "--healthcheck",
              description:
                "The name of the healthcheck to use with this backend",
              args: {
                name: "healthcheck",
              },
            },
            {
              name: "--shield",
              description:
                "The shield POP designated to reduce inbound load on this origin by serving the cached data to the rest of the network",
              args: {
                name: "shield",
              },
            },
            {
              name: "--use-ssl",
              description: "Whether or not to use SSL to reach the backend",
            },
            {
              name: "--ssl-check-cert",
              description: "Be strict on checking SSL certs",
            },
            {
              name: "--ssl-ca-cert",
              description: "CA certificate attached to origin",
              args: {
                name: "ssl-ca-cert",
              },
            },
            {
              name: "--ssl-client-cert",
              description: "Client certificate attached to origin",
              args: {
                name: "ssl-client-cert",
              },
            },
            {
              name: "--ssl-client-key",
              description: "Client key attached to origin",
              args: {
                name: "ssl-client-key",
              },
            },
            {
              name: "--ssl-cert-hostname",
              description:
                "Overrides ssl_hostname, but only for cert verification. Does not affect SNI at all",
              args: {
                name: "ssl-cert-hostname",
              },
            },
            {
              name: "--ssl-sni-hostname",
              description:
                "Overrides ssl_hostname, but only for SNI in the handshake. Does not affect cert validation at all",
              args: {
                name: "ssl-sni-hostname",
              },
            },
            {
              name: "--min-tls-version",
              description:
                "Minimum allowed TLS version on SSL connections to this backend",
              args: {
                name: "min-tls-version",
              },
            },
            {
              name: "--max-tls-version",
              description:
                "Maximum allowed TLS version on SSL connections to this backend",
              args: {
                name: "max-tls-version",
              },
            },
            {
              name: "--ssl-ciphers",
              description:
                "Colon delimited list of OpenSSL ciphers (see https://www.openssl.org/docs/man1.0.2/man1/ciphers for details)",
              args: {
                name: "ssl-ciphers",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a backend on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Backend name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Show detailed information about a backend on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--name",
              description: "Name of backend",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List backends on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a backend on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Backend name",
              args: {
                name: "name",
              },
            },
            {
              name: "--new-name",
              description: "New backend name",
              args: {
                name: "new-name",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--address",
              description: "A hostname, IPv4, or IPv6 address for the backend",
              args: {
                name: "address",
              },
            },
            {
              name: "--port",
              description: "Port number of the address",
              args: {
                name: "port",
              },
            },
            {
              name: "--override-host",
              description: "The hostname to override the Host header",
              args: {
                name: "override-host",
              },
            },
            {
              name: "--connect-timeout",
              description: "How long to wait for a timeout in milliseconds",
              args: {
                name: "connect-timeout",
              },
            },
            {
              name: "--max-conn",
              description: "Maximum number of connections",
              args: {
                name: "max-conn",
              },
            },
            {
              name: "--first-byte-timeout",
              description:
                "How long to wait for the first bytes in milliseconds",
              args: {
                name: "first-byte-timeout",
              },
            },
            {
              name: "--between-bytes-timeout",
              description: "How long to wait between bytes in milliseconds",
              args: {
                name: "between-bytes-timeout",
              },
            },
            {
              name: "--auto-loadbalance",
              description:
                "Whether or not this backend should be automatically load balanced",
            },
            {
              name: "--weight",
              description:
                "Weight used to load balance this backend against others",
              args: {
                name: "weight",
              },
            },
            {
              name: "--request-condition",
              description:
                "Condition, which if met, will select this backend during a request",
              args: {
                name: "request-condition",
              },
            },
            {
              name: "--healthcheck",
              description:
                "The name of the healthcheck to use with this backend",
              args: {
                name: "healthcheck",
              },
            },
            {
              name: "--shield",
              description:
                "The shield POP designated to reduce inbound load on this origin by serving the cached data to the rest of the network",
              args: {
                name: "shield",
              },
            },
            {
              name: "--use-ssl",
              description: "Whether or not to use SSL to reach the backend",
            },
            {
              name: "--ssl-check-cert",
              description: "Be strict on checking SSL certs",
            },
            {
              name: "--ssl-ca-cert",
              description: "CA certificate attached to origin",
              args: {
                name: "ssl-ca-cert",
              },
            },
            {
              name: "--ssl-client-cert",
              description: "Client certificate attached to origin",
              args: {
                name: "ssl-client-cert",
              },
            },
            {
              name: "--ssl-client-key",
              description: "Client key attached to origin",
              args: {
                name: "ssl-client-key",
              },
            },
            {
              name: "--ssl-cert-hostname",
              description:
                "Overrides ssl_hostname, but only for cert verification. Does not affect SNI at all",
              args: {
                name: "ssl-cert-hostname",
              },
            },
            {
              name: "--ssl-sni-hostname",
              description:
                "Overrides ssl_hostname, but only for SNI in the handshake. Does not affect cert validation at all",
              args: {
                name: "ssl-sni-hostname",
              },
            },
            {
              name: "--min-tls-version",
              description:
                "Minimum allowed TLS version on SSL connections to this backend",
              args: {
                name: "min-tls-version",
              },
            },
            {
              name: "--max-tls-version",
              description:
                "Maximum allowed TLS version on SSL connections to this backend",
              args: {
                name: "max-tls-version",
              },
            },
            {
              name: "--ssl-ciphers",
              description:
                "Colon delimited list of OpenSSL ciphers (see https://www.openssl.org/docs/man1.0.2/man1/ciphers for details)",
              args: {
                name: "ssl-ciphers",
              },
            },
          ],
        },
      ],
    },
    {
      name: "compute",
      description: "Manage Compute@Edge packages",
      subcommands: [
        {
          name: "build",
          description: "Build a Compute@Edge package locally",
          options: [
            {
              name: "--accept-custom-build",
              description:
                "Do not prompt when project manifest defines [scripts.build]",
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--name",
              description: "Package name",
              args: {
                name: "name",
              },
            },
            {
              name: "--skip-verification",
              description: "Skip verification steps and force build",
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy a package to a Fastly Compute@Edge service",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--accept-defaults",
              description:
                "Accept default values for all prompts and perform deploy non-interactively",
            },
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: "--domain",
              description: "The name of the domain associated to the package",
              args: {
                name: "domain",
              },
            },
            {
              name: "--name",
              description: "Package name",
              args: {
                name: "name",
              },
            },
            {
              name: "--package",
              description: "Path to a package tar.gz",
              args: {
                name: "package",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a new Compute@Edge package locally",
          options: [
            {
              name: "--name",
              description: "Name of package, falls back to --directory",
              args: {
                name: "name",
              },
            },
            {
              name: "--description",
              description: "Description of the package",
              args: {
                name: "description",
              },
            },
            {
              name: "--directory",
              description:
                "Destination to write the new package, defaulting to the current directory",
              args: {
                name: "directory",
              },
            },
            {
              name: "--author",
              description: "Author(s) of the package",
              args: {
                name: "author",
              },
            },
            {
              name: "--language",
              description: "Language of the package",
              args: {
                name: "language",
              },
            },
            {
              name: "--from",
              description:
                "Git repository URL, or URL referencing a .zip/.tar.gz file, containing a package template",
              args: {
                name: "from",
              },
            },
            {
              name: "--force",
              description:
                "Skip non-empty directory verification step and force new project creation",
            },
          ],
        },
        {
          name: "pack",
          description:
            "Package a pre-compiled Wasm binary for a Fastly Compute@Edge service",
          options: [
            {
              name: "--wasm-binary",
              description: "Path to a pre-compiled Wasm binary",
              args: {
                name: "wasm-binary",
              },
            },
          ],
        },
        {
          name: "publish",
          description:
            "Build and deploy a Compute@Edge package to a Fastly service",
          options: [
            {
              name: "--accept-custom-build",
              description:
                "Do not prompt when project manifest defines [scripts.build]",
            },
            {
              name: "--accept-defaults",
              description:
                "Accept default values for all prompts and perform deploy non-interactively",
            },
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: "--domain",
              description: "The name of the domain associated to the package",
              args: {
                name: "domain",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--name",
              description: "Package name",
              args: {
                name: "name",
              },
            },
            {
              name: "--package",
              description: "Path to a package tar.gz",
              args: {
                name: "package",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--skip-verification",
              description: "Skip verification steps and force build",
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
          ],
        },
        {
          name: "serve",
          description: "Build and run a Compute@Edge package locally",
          options: [
            {
              name: "--accept-custom-build",
              description:
                "Do not prompt when project manifest defines [scripts.build]",
            },
            {
              name: "--addr",
              description: "The IPv4 address and port to listen on",
              args: {
                name: "addr",
              },
            },
            {
              name: "--env",
              description: "The environment configuration to use (e.g. stage)",
              args: {
                name: "env",
              },
            },
            {
              name: "--file",
              description: "The Wasm file to run",
              args: {
                name: "file",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--name",
              description: "Package name",
              args: {
                name: "name",
              },
            },
            {
              name: "--skip-build",
              description: "Skip the build step",
            },
            {
              name: "--skip-verification",
              description: "Skip verification steps and force build",
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--watch",
              description:
                "Watch for file changes, then rebuild project and restart local server",
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a package on a Fastly Compute@Edge service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--package",
              description: "Path to a package tar.gz",
              args: {
                name: "package",
              },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a Compute@Edge package",
          options: [
            {
              name: "--package",
              description: "Path to a package tar.gz",
              args: {
                name: "package",
              },
            },
          ],
        },
      ],
    },
    {
      name: "configure",
      description: "Configure the Fastly CLI",
      options: [
        {
          name: "--location",
          description: "Print the location of the CLI configuration file",
        },
        {
          name: "--display",
          description: "Print the CLI configuration file",
        },
      ],
    },
    {
      name: "dictionary",
      description: "Manipulate Fastly edge dictionaries",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Fastly edge dictionary on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Name of Dictionary",
              args: {
                name: "name",
              },
            },
            {
              name: "--write-only",
              description:
                "Whether to mark this dictionary as write-only. Can be true or false (defaults to false)",
              args: {
                name: "write-only",
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a Fastly edge dictionary from a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Name of Dictionary",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Show detailed information about a Fastly edge dictionary",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--name",
              description: "Name of Dictionary",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all dictionaries on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update name of dictionary on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Old name of Dictionary",
              args: {
                name: "name",
              },
            },
            {
              name: "--new-name",
              description: "New name of Dictionary",
              args: {
                name: "new-name",
              },
            },
            {
              name: "--write-only",
              description:
                "Whether to mark this dictionary as write-only. Can be true or false (defaults to false)",
              args: {
                name: "write-only",
              },
            },
          ],
        },
      ],
    },
    {
      name: "dictionary-item",
      description: "Manipulate Fastly edge dictionary items",
      subcommands: [
        {
          name: "create",
          description: "Create a new item on a Fastly edge dictionary",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--dictionary-id",
              description: "Dictionary ID",
              args: {
                name: "dictionary-id",
              },
            },
            {
              name: "--key",
              description: "Dictionary item key",
              args: {
                name: "key",
              },
            },
            {
              name: "--value",
              description: "Dictionary item value",
              args: {
                name: "value",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an item from a Fastly edge dictionary",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--dictionary-id",
              description: "Dictionary ID",
              args: {
                name: "dictionary-id",
              },
            },
            {
              name: "--key",
              description: "Dictionary item key",
              args: {
                name: "key",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Show detailed information about a Fastly edge dictionary item",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--dictionary-id",
              description: "Dictionary ID",
              args: {
                name: "dictionary-id",
              },
            },
            {
              name: "--key",
              description: "Dictionary item key",
              args: {
                name: "key",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List items in a Fastly edge dictionary",
          options: [
            {
              name: "--dictionary-id",
              description: "Dictionary ID",
              args: {
                name: "dictionary-id",
              },
            },
            {
              name: "--direction",
              description: "Direction in which to sort results",
              args: {
                name: "direction",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--page",
              description: "Page number of data set to fetch",
              args: {
                name: "page",
              },
            },
            {
              name: "--per-page",
              description: "Number of records per page",
              args: {
                name: "per-page",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--sort",
              description: "Field on which to sort",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update or insert an item on a Fastly edge dictionary",
          options: [
            {
              name: "--dictionary-id",
              description: "Dictionary ID",
              args: {
                name: "dictionary-id",
              },
            },
            {
              name: "--file",
              description: "Batch update json file",
              args: {
                name: "file",
              },
            },
            {
              name: "--key",
              description: "Dictionary item key",
              args: {
                name: "key",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--value",
              description: "Dictionary item value",
              args: {
                name: "value",
              },
            },
          ],
        },
      ],
    },
    {
      name: "domain",
      description: "Manipulate Fastly service version domains",
      subcommands: [
        {
          name: "create",
          description: "Create a domain on a Fastly service version",
          options: [
            {
              name: "--name",
              description: "Domain name",
              args: {
                name: "name",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a domain on a Fastly service version",
          options: [
            {
              name: "--name",
              description: "Domain name",
              args: {
                name: "name",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
          ],
        },
        {
          name: "describe",
          description:
            "Show detailed information about a domain on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--name",
              description: "Name of domain",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List domains on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a domain on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Domain name",
              args: {
                name: "name",
              },
            },
            {
              name: "--new-name",
              description: "New domain name",
              args: {
                name: "new-name",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
          ],
        },
        {
          name: "validate",
          description:
            "Checks the status of a specific domain's DNS record for a Service Version",
          options: [
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--all",
              description:
                "Checks the status of all domains' DNS records for a Service Version",
            },
            {
              name: "--name",
              description:
                "The name of the domain associated with this service",
              args: {
                name: "name",
              },
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "healthcheck",
      description: "Manipulate Fastly service version healthchecks",
      subcommands: [
        {
          name: "create",
          description: "Create a healthcheck on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Healthcheck name",
              args: {
                name: "name",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--method",
              description: "Which HTTP method to use",
              args: {
                name: "method",
              },
            },
            {
              name: "--host",
              description: "Which host to check",
              args: {
                name: "host",
              },
            },
            {
              name: "--path",
              description: "The path to check",
              args: {
                name: "path",
              },
            },
            {
              name: "--http-version",
              description: "Whether to use version 1.0 or 1.1 HTTP",
              args: {
                name: "http-version",
              },
            },
            {
              name: "--timeout",
              description: "Timeout in milliseconds",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--check-interval",
              description: "How often to run the healthcheck in milliseconds",
              args: {
                name: "check-interval",
              },
            },
            {
              name: "--expected-response",
              description: "The status code expected from the host",
              args: {
                name: "expected-response",
              },
            },
            {
              name: "--window",
              description:
                "The number of most recent healthcheck queries to keep for this healthcheck",
              args: {
                name: "window",
              },
            },
            {
              name: "--threshold",
              description:
                "How many healthchecks must succeed to be considered healthy",
              args: {
                name: "threshold",
              },
            },
            {
              name: "--initial",
              description:
                "When loading a config, the initial number of probes to be seen as OK",
              args: {
                name: "initial",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a healthcheck on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Healthcheck name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Show detailed information about a healthcheck on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--name",
              description: "Name of healthcheck",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List healthchecks on a Fastly service version",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a healthcheck on a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--name",
              description: "Healthcheck name",
              args: {
                name: "name",
              },
            },
            {
              name: "--new-name",
              description: "Healthcheck name",
              args: {
                name: "new-name",
              },
            },
            {
              name: "--comment",
              description: "A descriptive note",
              args: {
                name: "comment",
              },
            },
            {
              name: "--method",
              description: "Which HTTP method to use",
              args: {
                name: "method",
              },
            },
            {
              name: "--host",
              description: "Which host to check",
              args: {
                name: "host",
              },
            },
            {
              name: "--path",
              description: "The path to check",
              args: {
                name: "path",
              },
            },
            {
              name: "--http-version",
              description: "Whether to use version 1.0 or 1.1 HTTP",
              args: {
                name: "http-version",
              },
            },
            {
              name: "--timeout",
              description: "Timeout in milliseconds",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--check-interval",
              description: "How often to run the healthcheck in milliseconds",
              args: {
                name: "check-interval",
              },
            },
            {
              name: "--expected-response",
              description: "The status code expected from the host",
              args: {
                name: "expected-response",
              },
            },
            {
              name: "--window",
              description:
                "The number of most recent healthcheck queries to keep for this healthcheck",
              args: {
                name: "window",
              },
            },
            {
              name: "--threshold",
              description:
                "How many healthchecks must succeed to be considered healthy",
              args: {
                name: "threshold",
              },
            },
            {
              name: "--initial",
              description:
                "When loading a config, the initial number of probes to be seen as OK",
              args: {
                name: "initial",
              },
            },
          ],
        },
      ],
    },
    {
      name: "ip-list",
      description: "List Fastly's public IPs",
    },
    {
      name: "log-tail",
      description: "Tail Compute@Edge logs",
      options: [
        {
          name: "--service-id",
          description:
            "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
          args: {
            name: "service-id",
          },
        },
        {
          name: "--service-name",
          description: "The name of the service",
          args: {
            name: "service-name",
          },
        },
        {
          name: "--from",
          description: "From time, in Unix seconds",
          args: {
            name: "from",
          },
        },
        {
          name: "--to",
          description: "To time, in Unix seconds",
          args: {
            name: "to",
          },
        },
        {
          name: "--sort-buffer",
          description: "Duration of sort buffer for received logs",
          args: {
            name: "sort-buffer",
          },
        },
        {
          name: "--search-padding",
          description: "Time beyond from/to to consider in searches",
          args: {
            name: "search-padding",
          },
        },
        {
          name: "--stream",
          description: "Output: stdout, stderr, both (default)",
          args: {
            name: "stream",
          },
        },
      ],
    },
    {
      name: "logging",
      description: "Manipulate Fastly service version logging endpoints",
      subcommands: [
        {
          name: "azureblob",
          description:
            "Manipulate Fastly service version Azure Blob Storage logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Azure Blob Storage logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Azure Blob Storage logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--container",
                  description:
                    "The name of the Azure Blob Storage container in which to store logs",
                  args: {
                    name: "container",
                  },
                },
                {
                  name: "--account-name",
                  description:
                    "The unique Azure Blob Storage namespace in which your data objects are stored",
                  args: {
                    name: "account-name",
                  },
                },
                {
                  name: "--sas-token",
                  description:
                    "The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work",
                  args: {
                    name: "sas-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--file-max-bytes",
                  description: "The maximum size of a log file in bytes",
                  args: {
                    name: "file-max-bytes",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an Azure Blob Storage logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the Azure Blob Storage logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an Azure Blob Storage logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description:
                    "The name of the Azure Blob Storage logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Azure Blob Storage logging endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Azure Blob Storage logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the Azure Blob Storage logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description:
                    "New name of the Azure Blob Storage logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--container",
                  description:
                    "The name of the Azure Blob Storage container in which to store logs",
                  args: {
                    name: "container",
                  },
                },
                {
                  name: "--account-name",
                  description:
                    "The unique Azure Blob Storage namespace in which your data objects are stored",
                  args: {
                    name: "account-name",
                  },
                },
                {
                  name: "--sas-token",
                  description:
                    "The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work",
                  args: {
                    name: "sas-token",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--file-max-bytes",
                  description: "The maximum size of a log file in bytes",
                  args: {
                    name: "file-max-bytes",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "bigquery",
          description:
            "Manipulate Fastly service version BigQuery logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a BigQuery logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the BigQuery logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--project-id",
                  description: "Your Google Cloud Platform project ID",
                  args: {
                    name: "project-id",
                  },
                },
                {
                  name: "--dataset",
                  description: "Your BigQuery dataset",
                  args: {
                    name: "dataset",
                  },
                },
                {
                  name: "--table",
                  description: "Your BigQuery table",
                  args: {
                    name: "table",
                  },
                },
                {
                  name: "--user",
                  description:
                    "Your Google Cloud Platform service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your Google Cloud Platform account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--template-suffix",
                  description: "BigQuery table name suffix template",
                  args: {
                    name: "template-suffix",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Must produce JSON that matches the schema of your BigQuery table",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a BigQuery logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the BigQuery logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a BigQuery logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the BigQuery logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List BigQuery endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a BigQuery logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the BigQuery logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the BigQuery logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--project-id",
                  description: "Your Google Cloud Platform project ID",
                  args: {
                    name: "project-id",
                  },
                },
                {
                  name: "--dataset",
                  description: "Your BigQuery dataset",
                  args: {
                    name: "dataset",
                  },
                },
                {
                  name: "--table",
                  description: "Your BigQuery table",
                  args: {
                    name: "table",
                  },
                },
                {
                  name: "--user",
                  description:
                    "Your Google Cloud Platform service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your Google Cloud Platform account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--template-suffix",
                  description: "BigQuery table name suffix template",
                  args: {
                    name: "template-suffix",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Must produce JSON that matches the schema of your BigQuery table",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "cloudfiles",
          description:
            "Manipulate Fastly service version Cloudfiles logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Cloudfiles logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Cloudfiles logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--user",
                  description: "The username for your Cloudfile account",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your Cloudfile account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--bucket",
                  description: "The name of your Cloudfiles container",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region to stream logs to. One of: DFW-Dallas, ORD-Chicago, IAD-Northern Virginia, LON-London, SYD-Sydney, HKG-Hong Kong",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Cloudfiles logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Cloudfiles logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Cloudfiles logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Cloudfiles logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Cloudfiles endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Cloudfiles logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Cloudfiles logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Cloudfiles logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--user",
                  description: "The username for your Cloudfile account",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your Cloudfile account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--bucket",
                  description: "The name of your Cloudfiles container",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region to stream logs to. One of: DFW-Dallas, ORD-Chicago, IAD-Northern Virginia, LON-London, SYD-Sydney, HKG-Hong Kong",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "datadog",
          description:
            "Manipulate Fastly service version Datadog logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Datadog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Datadog logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--auth-token",
                  description: "The API key from your Datadog account",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region that log data will be sent to. One of US or EU. Defaults to US if undefined",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. For details on the default value refer to the documentation (https://developer.fastly.com/reference/api/logging/datadog/)",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Datadog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Datadog logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Datadog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Datadog logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Datadog endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Datadog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Datadog logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Datadog logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--auth-token",
                  description: "The API key from your Datadog account",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region that log data will be sent to. One of US or EU. Defaults to US if undefined",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. For details on the default value refer to the documentation (https://developer.fastly.com/reference/api/logging/datadog/)",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "digitalocean",
          description:
            "Manipulate Fastly service version DigitalOcean Spaces logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a DigitalOcean Spaces logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the DigitalOcean Spaces logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--bucket",
                  description: "The name of the DigitalOcean Space",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your DigitalOcean Spaces account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description: "Your DigitalOcean Spaces account secret key",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--domain",
                  description:
                    "The domain of the DigitalOcean Spaces endpoint (default 'nyc3.digitaloceanspaces.com')",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a DigitalOcean Spaces logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the DigitalOcean Spaces logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a DigitalOcean Spaces logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description:
                    "The name of the DigitalOcean Spaces logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List DigitalOcean Spaces logging endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a DigitalOcean Spaces logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the DigitalOcean Spaces logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description:
                    "New name of the DigitalOcean Spaces logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--bucket",
                  description: "The name of the DigitalOcean Space",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--domain",
                  description:
                    "The domain of the DigitalOcean Spaces endpoint (default 'nyc3.digitaloceanspaces.com')",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your DigitalOcean Spaces account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description: "Your DigitalOcean Spaces account secret key",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "elasticsearch",
          description:
            "Manipulate Fastly service version Elasticsearch logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Elasticsearch logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Elasticsearch logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--index",
                  description:
                    "The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch index format rules (https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support strftime (http://man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, #{%F} will interpolate as YYYY-MM-DD with today's date",
                  args: {
                    name: "index",
                  },
                },
                {
                  name: "--url",
                  description: "The URL to stream logs to. Must use HTTPS",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--pipeline",
                  description:
                    "The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. For example my_pipeline_id. Learn more about creating a pipeline in the Elasticsearch docs (https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html)",
                  args: {
                    name: "pipeline",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Elasticsearch can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--request-max-entries",
                  description:
                    "Maximum number of logs to append to a batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-entries",
                  },
                },
                {
                  name: "--request-max-bytes",
                  description:
                    "Maximum size of log batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-bytes",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an Elasticsearch logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Elasticsearch logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an Elasticsearch logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Elasticsearch logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Elasticsearch endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Elasticsearch logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Elasticsearch logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Elasticsearch logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--index",
                  description:
                    "The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch index format rules (https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support strftime (http://man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, #{%F} will interpolate as YYYY-MM-DD with today's date",
                  args: {
                    name: "index",
                  },
                },
                {
                  name: "--url",
                  description: "The URL to stream logs to. Must use HTTPS",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--pipeline",
                  description:
                    "The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. For example my_pipeline_id. Learn more about creating a pipeline in the Elasticsearch docs (https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html)",
                  args: {
                    name: "pipeline",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Elasticsearch can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--request-max-entries",
                  description:
                    "Maximum number of logs to append to a batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-entries",
                  },
                },
                {
                  name: "--request-max-bytes",
                  description:
                    "Maximum size of log batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-bytes",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ftp",
          description:
            "Manipulate Fastly service version FTP logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an FTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the FTP logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--address",
                  description: "An hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--user",
                  description: "The username for the server (can be anonymous)",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--password",
                  description:
                    "The password for the server (for anonymous use an email address)",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--path",
                  description:
                    "The path to upload log files to. If the path ends in / then it is treated as a directory",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an FTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the FTP logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an FTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the FTP logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List FTP endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an FTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the FTP logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the FTP logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--address",
                  description: "An hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--username",
                  description: "The username for the server (can be anonymous)",
                  args: {
                    name: "username",
                  },
                },
                {
                  name: "--password",
                  description:
                    "The password for the server (for anonymous use an email address)",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--path",
                  description:
                    "The path to upload log files to. If the path ends in / then it is treated as a directory",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "gcs",
          description:
            "Manipulate Fastly service version GCS logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a GCS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the GCS logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--user",
                  description:
                    "Your GCS service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--bucket",
                  description: "The bucket of the GCS bucket",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your GCS account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to (default '/')",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a GCS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the GCS logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a GCS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the GCS logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List GCS endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a GCS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the GCS logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the GCS logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--bucket",
                  description: "The bucket of the GCS bucket",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--user",
                  description:
                    "Your GCS service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your GCS account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to (default '/')",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "googlepubsub",
          description:
            "Manipulate Fastly service version Google Cloud Pub/Sub logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Google Cloud Pub/Sub logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--user",
                  description:
                    "Your Google Cloud Platform service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your Google Cloud Platform account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--topic",
                  description:
                    "The Google Cloud Pub/Sub topic to which logs will be published",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--project-id",
                  description: "The ID of your Google Cloud Platform project",
                  args: {
                    name: "project-id",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the Google Cloud Pub/Sub logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description:
                    "The name of the Google Cloud Pub/Sub logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Google Cloud Pub/Sub endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description:
                    "The name of the Google Cloud Pub/Sub logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description:
                    "New name of the Google Cloud Pub/Sub logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--user",
                  description:
                    "Your Google Cloud Platform service account email address. The client_email field in your service account authentication JSON",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "Your Google Cloud Platform account secret key. The private_key field in your service account authentication JSON",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--topic",
                  description:
                    "The Google Cloud Pub/Sub topic to which logs will be published",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--project-id",
                  description: "The ID of your Google Cloud Platform project",
                  args: {
                    name: "project-id",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "heroku",
          description:
            "Manipulate Fastly service version Heroku logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Heroku logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Heroku logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--url",
                  description: "The url to stream logs to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://devcenter.heroku.com/articles/add-on-partner-log-integration)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Heroku logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Heroku logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Heroku logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Heroku logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Heroku endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Heroku logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Heroku logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Heroku logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--url",
                  description: "The url to stream logs to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://devcenter.heroku.com/articles/add-on-partner-log-integration)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "honeycomb",
          description:
            "Manipulate Fastly service version Honeycomb logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Honeycomb logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Honeycomb logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--dataset",
                  description: "The Honeycomb Dataset you want to log to",
                  args: {
                    name: "dataset",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The Write Key from the Account page of your Honeycomb account",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Honeycomb can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Honeycomb logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Honeycomb logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Honeycomb logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Honeycomb logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Honeycomb endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Honeycomb logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Honeycomb logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Honeycomb logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Honeycomb can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--dataset",
                  description: "The Honeycomb Dataset you want to log to",
                  args: {
                    name: "dataset",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The Write Key from the Account page of your Honeycomb account",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "https",
          description:
            "Manipulate Fastly service version HTTPS logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an HTTPS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the HTTPS logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--url",
                  description:
                    "URL that log data will be sent to. Must use the https protocol",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--content-type",
                  description:
                    "Content type of the header sent with the request",
                  args: {
                    name: "content-type",
                  },
                },
                {
                  name: "--header-name",
                  description:
                    "Name of the custom header sent with the request",
                  args: {
                    name: "header-name",
                  },
                },
                {
                  name: "--header-value",
                  description:
                    "Value of the custom header sent with the request",
                  args: {
                    name: "header-value",
                  },
                },
                {
                  name: "--method",
                  description:
                    "HTTP method used for request. Can be POST or PUT. Defaults to POST if not specified",
                  args: {
                    name: "method",
                  },
                },
                {
                  name: "--json-format",
                  description:
                    "Enforces valid JSON formatting for log entries. Can be disabled 0, array of json (wraps JSON log batches in an array) 1, or newline delimited json (places each JSON log entry onto a new line in a batch) 2",
                  args: {
                    name: "json-format",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that HTTPS can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--request-max-entries",
                  description:
                    "Maximum number of logs to append to a batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-entries",
                  },
                },
                {
                  name: "--request-max-bytes",
                  description:
                    "Maximum size of log batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-bytes",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an HTTPS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the HTTPS logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an HTTPS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the HTTPS logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List HTTPS endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an HTTPS logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the HTTPS logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the HTTPS logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--url",
                  description:
                    "URL that log data will be sent to. Must use the https protocol",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--content-type",
                  description:
                    "Content type of the header sent with the request",
                  args: {
                    name: "content-type",
                  },
                },
                {
                  name: "--header-name",
                  description:
                    "Name of the custom header sent with the request",
                  args: {
                    name: "header-name",
                  },
                },
                {
                  name: "--header-value",
                  description:
                    "Value of the custom header sent with the request",
                  args: {
                    name: "header-value",
                  },
                },
                {
                  name: "--method",
                  description:
                    "HTTP method used for request. Can be POST or PUT. Defaults to POST if not specified",
                  args: {
                    name: "method",
                  },
                },
                {
                  name: "--json-format",
                  description:
                    "Enforces valid JSON formatting for log entries. Can be disabled 0, array of json (wraps JSON log batches in an array) 1, or newline delimited json (places each JSON log entry onto a new line in a batch) 2",
                  args: {
                    name: "json-format",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that HTTPS can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--request-max-entries",
                  description:
                    "Maximum number of logs to append to a batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-entries",
                  },
                },
                {
                  name: "--request-max-bytes",
                  description:
                    "Maximum size of log batch, if non-zero. Defaults to 0 for unbounded",
                  args: {
                    name: "request-max-bytes",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "kafka",
          description:
            "Manipulate Fastly service version Kafka logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Kafka logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Kafka logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--topic",
                  description: "The Kafka topic to send logs to",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--brokers",
                  description:
                    "A comma-separated list of IP addresses or hostnames of Kafka brokers",
                  args: {
                    name: "brokers",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    "The codec used for compression of your logs. One of: gzip, snappy, lz4",
                  args: {
                    name: "compression-codec",
                  },
                },
                {
                  name: "--required-acks",
                  description:
                    "The Number of acknowledgements a leader must receive before a write is considered successful. One of: 1 (default) One server needs to respond. 0\tNo servers need to respond. -1\tWait for all in-sync replicas to respond",
                  args: {
                    name: "required-acks",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Kafka can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--parse-log-keyvals",
                  description: "Parse key-value pairs within the log format",
                },
                {
                  name: "--max-batch-size",
                  description: "The maximum size of the log batch in bytes",
                  args: {
                    name: "max-batch-size",
                  },
                },
                {
                  name: "--use-sasl",
                  description:
                    "Enable SASL authentication. Requires --auth-method, --username, and --password to be specified",
                },
                {
                  name: "--auth-method",
                  description:
                    "SASL authentication method. Valid values are: plain, scram-sha-256, scram-sha-512",
                  args: {
                    name: "auth-method",
                  },
                },
                {
                  name: "--username",
                  description:
                    "SASL authentication username. Required if --auth-method is specified",
                  args: {
                    name: "username",
                  },
                },
                {
                  name: "--password",
                  description:
                    "SASL authentication password. Required if --auth-method is specified",
                  args: {
                    name: "password",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Kafka logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Kafka logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Kafka logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Kafka logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Kafka endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Kafka logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Kafka logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Kafka logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--topic",
                  description: "The Kafka topic to send logs to",
                  args: {
                    name: "topic",
                  },
                },
                {
                  name: "--brokers",
                  description:
                    "A comma-separated list of IP addresses or hostnames of Kafka brokers",
                  args: {
                    name: "brokers",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    "The codec used for compression of your logs. One of: gzip, snappy, lz4",
                  args: {
                    name: "compression-codec",
                  },
                },
                {
                  name: "--required-acks",
                  description:
                    "The Number of acknowledgements a leader must receive before a write is considered successful. One of: 1 (default) One server needs to respond. 0\tNo servers need to respond. -1\tWait for all in-sync replicas to respond",
                  args: {
                    name: "required-acks",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--format",
                  description:
                    "Apache style log formatting. Your log must produce valid JSON that Kafka can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--parse-log-keyvals",
                  description: "Parse key-value pairs within the log format",
                },
                {
                  name: "--max-batch-size",
                  description: "The maximum size of the log batch in bytes",
                  args: {
                    name: "max-batch-size",
                  },
                },
                {
                  name: "--use-sasl",
                  description:
                    "Enable SASL authentication. Requires --auth-method, --username, and --password to be specified",
                },
                {
                  name: "--auth-method",
                  description:
                    "SASL authentication method. Valid values are: plain, scram-sha-256, scram-sha-512",
                  args: {
                    name: "auth-method",
                  },
                },
                {
                  name: "--username",
                  description:
                    "SASL authentication username. Required if --auth-method is specified",
                  args: {
                    name: "username",
                  },
                },
                {
                  name: "--password",
                  description:
                    "SASL authentication password. Required if --auth-method is specified",
                  args: {
                    name: "password",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "kinesis",
          description:
            "Manipulate a Kinesis logging endpoint for a specific Fastly service version",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Amazon Kinesis logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Kinesis logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--stream-name",
                  description: "The Amazon Kinesis stream to send logs to",
                  args: {
                    name: "stream-name",
                  },
                },
                {
                  name: "--region",
                  description: "The AWS region where the Kinesis stream exists",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--access-key",
                  description:
                    "The access key associated with the target Amazon Kinesis stream",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "The secret key associated with the target Amazon Kinesis stream",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--iam-role",
                  description: "The IAM role ARN for logging",
                  args: {
                    name: "iam-role",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Kinesis logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Kinesis logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Kinesis logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Kinesis logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Kinesis endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Kinesis logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Kinesis logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Kinesis logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--stream-name",
                  description: "Your Kinesis stream name",
                  args: {
                    name: "stream-name",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your Kinesis account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description: "Your Kinesis account secret key",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--iam-role",
                  description: "The IAM role ARN for logging",
                  args: {
                    name: "iam-role",
                  },
                },
                {
                  name: "--region",
                  description: "The AWS region where the Kinesis stream exists",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "logentries",
          description:
            "Manipulate Fastly service version Logentries logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Logentries logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Logentries logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--auth-token",
                  description:
                    "Use token based authentication (https://logentries.com/doc/input-token/)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--region",
                  description: "The region to which to stream logs",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Logentries logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Logentries logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Logentries logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Logentries logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Logentries endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Logentries logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Logentries logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Logentries logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--auth-token",
                  description:
                    "Use token based authentication (https://logentries.com/doc/input-token/)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--region",
                  description: "The region to which to stream logs",
                  args: {
                    name: "region",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "loggly",
          description:
            "Manipulate Fastly service version Loggly logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Loggly logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Loggly logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Loggly logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Loggly logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Loggly logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Loggly logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Loggly endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Loggly logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Loggly logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Loggly logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "logshuttle",
          description:
            "Manipulate Fastly service version Logshuttle logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Logshuttle logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Logshuttle logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--url",
                  description: "Your Log Shuttle endpoint url",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The data authentication token associated with this endpoint",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Logshuttle logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Logshuttle logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Logshuttle logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Logshuttle logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Logshuttle endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Logshuttle logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Logshuttle logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Logshuttle logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--url",
                  description: "Your Log Shuttle endpoint url",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The data authentication token associated with this endpoint",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "newrelic",
          description:
            "Manipulate a NewRelic logging endpoint for a specific Fastly service version",
          subcommands: [
            {
              name: "create",
              description:
                "Create an New Relic logging endpoint attached to the specified service version",
              options: [
                {
                  name: "--key",
                  description:
                    "The Insert API key from the Account page of your New Relic account",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: "--name",
                  description:
                    "The name for the real-time logging configuration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--format",
                  description:
                    "A Fastly log format string. Must produce valid JSON that New Relic Logs can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--region",
                  description: "The region to which to stream logs",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the New Relic Logs logging object for a particular service and version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name for the real-time logging configuration to delete",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Get the details of a New Relic Logs logging object for a particular service and version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name for the real-time logging configuration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List all of the New Relic Logs logging objects for a particular service and version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a New Relic Logs logging object for a particular service and version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name for the real-time logging configuration to update",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--format",
                  description:
                    "A Fastly log format string. Must produce valid JSON that New Relic Logs can ingest",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--key",
                  description:
                    "The Insert API key from the Account page of your New Relic account",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: "--new-name",
                  description:
                    "The name for the real-time logging configuration",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--region",
                  description: "The region to which to stream logs",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "openstack",
          description:
            "Manipulate Fastly service version OpenStack logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an OpenStack logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the OpenStack logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--bucket",
                  description: "The name of your OpenStack container",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your OpenStack account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--user",
                  description: "The username for your OpenStack account",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--url",
                  description: "Your OpenStack auth url",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an OpenStack logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the OpenStack logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an OpenStack logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the OpenStack logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List OpenStack logging endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an OpenStack logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the OpenStack logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the OpenStack logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--bucket",
                  description: "The name of the Openstack Space",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your OpenStack account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--user",
                  description: "The username for your OpenStack account",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--url",
                  description: "Your OpenStack auth url",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "papertrail",
          description:
            "Manipulate Fastly service version Papertrail logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Papertrail logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Papertrail logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--address",
                  description: "A hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Papertrail logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Papertrail logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Papertrail logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Papertrail logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Papertrail endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Papertrail logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Papertrail logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Papertrail logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--address",
                  description: "A hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "s3",
          description: "Manipulate Fastly service version S3 logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Amazon S3 logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the S3 logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--bucket",
                  description: "Your S3 bucket name",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your S3 account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description: "Your S3 account secret key",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--iam-role",
                  description: "The IAM role ARN for logging",
                  args: {
                    name: "iam-role",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--domain",
                  description: "The domain of the S3 endpoint",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--redundancy",
                  description:
                    "The S3 redundancy level. Can be either standard or reduced_redundancy",
                  args: {
                    name: "redundancy",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--server-side-encryption",
                  description:
                    "Set to enable S3 Server Side Encryption. Can be either AES256 or aws:kms",
                  args: {
                    name: "server-side-encryption",
                  },
                },
                {
                  name: "--server-side-encryption-kms-key-id",
                  description:
                    "Server-side KMS Key ID. Must be set if server-side-encryption is set to aws:kms",
                  args: {
                    name: "server-side-encryption-kms-key-id",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a S3 logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the S3 logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a S3 logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the S3 logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List S3 endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a S3 logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the S3 logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the S3 logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--bucket",
                  description: "Your S3 bucket name",
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--access-key",
                  description: "Your S3 account access key",
                  args: {
                    name: "access-key",
                  },
                },
                {
                  name: "--secret-key",
                  description: "Your S3 account secret key",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--iam-role",
                  description: "The IAM role ARN for logging",
                  args: {
                    name: "iam-role",
                  },
                },
                {
                  name: "--domain",
                  description: "The domain of the S3 endpoint",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--path",
                  description: "The path to upload logs to",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--redundancy",
                  description:
                    "The S3 redundancy level. Can be either standard or reduced_redundancy",
                  args: {
                    name: "redundancy",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--server-side-encryption",
                  description:
                    "Set to enable S3 Server Side Encryption. Can be either AES256 or aws:kms",
                  args: {
                    name: "server-side-encryption",
                  },
                },
                {
                  name: "--server-side-encryption-kms-key-id",
                  description:
                    "Server-side KMS Key ID. Must be set if server-side-encryption is set to aws:kms",
                  args: {
                    name: "server-side-encryption-kms-key-id",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "scalyr",
          description:
            "Manipulate Fastly service version Scalyr logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Scalyr logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Scalyr logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://www.scalyr.com/keys)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region that log data will be sent to. One of US or EU. Defaults to US if undefined",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Scalyr logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Scalyr logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Scalyr logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Scalyr logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Scalyr endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Scalyr logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Scalyr logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Scalyr logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "The token to use for authentication (https://www.scalyr.com/keys)",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--region",
                  description:
                    "The region that log data will be sent to. One of US or EU. Defaults to US if undefined",
                  args: {
                    name: "region",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "sftp",
          description:
            "Manipulate Fastly service version SFTP logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SFTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the SFTP logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--address",
                  description: "The hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--user",
                  description: "The username for the server",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--ssh-known-hosts",
                  description:
                    "A list of host keys for all hosts we can connect to over SFTP",
                  args: {
                    name: "ssh-known-hosts",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--password",
                  description:
                    "The password for the server. If both password and secret_key are passed, secret_key will be used in preference",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "The SSH private key for the server. If both password and secret_key are passed, secret_key will be used in preference",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--path",
                  description:
                    "The path to upload logs to. The directory must exist on the SFTP server before logs can be saved to it",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an SFTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the SFTP logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about an SFTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the SFTP logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List SFTP endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an SFTP logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the SFTP logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the SFTP logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--address",
                  description: "The hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
                  args: {
                    name: "public-key",
                  },
                },
                {
                  name: "--secret-key",
                  description:
                    "The SSH private key for the server. If both password and secret_key are passed, secret_key will be used in preference",
                  args: {
                    name: "secret-key",
                  },
                },
                {
                  name: "--ssh-known-hosts",
                  description:
                    "A list of host keys for all hosts we can connect to over SFTP",
                  args: {
                    name: "ssh-known-hosts",
                  },
                },
                {
                  name: "--user",
                  description: "The username for the server",
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--password",
                  description:
                    "The password for the server. If both password and secret_key are passed, secret_key will be used in preference",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--path",
                  description:
                    "The path to upload logs to. The directory must exist on the SFTP server before logs can be saved to it",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--period",
                  description:
                    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
                  args: {
                    name: "period",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--gzip-level",
                  description:
                    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
                  args: {
                    name: "gzip-level",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--timestamp-format",
                  description:
                    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
                  args: {
                    name: "timestamp-format",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--compression-codec",
                  description:
                    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
                  args: {
                    name: "compression-codec",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "splunk",
          description:
            "Manipulate Fastly service version Splunk logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Splunk logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Splunk logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--url",
                  description: "The URL to POST to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "A Splunk token for use in posting logs over HTTP to your collector",
                  args: {
                    name: "auth-token",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Splunk logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Splunk logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Splunk logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Splunk logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Splunk endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Splunk logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Splunk logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Splunk logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--url",
                  description: "The URL to POST to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "The hostname used to verify the server's certificate. It can either be the Common Name or a Subject Alternative Name (SAN)",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "\tWhere in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
                {
                  name: "--auth-token",
                  description: "",
                  args: {
                    name: "auth-token",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "sumologic",
          description:
            "Manipulate Fastly service version Sumologic logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Sumologic logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Sumologic logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--url",
                  description: "The URL to POST to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Sumologic logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Sumologic logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Sumologic logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Sumologic logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List Sumologic endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Sumologic logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Sumologic logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Sumologic logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--url",
                  description: "The URL to POST to",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug. This field is not required and has no default value",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "syslog",
          description:
            "Manipulate Fastly service version Syslog logging endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Syslog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the Syslog logging object. Used as a primary key for API access",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--address",
                  description: "A hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "Used during the TLS handshake to validate the certificate",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "Whether to prepend each message with a specific token",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Syslog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Syslog logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show detailed information about a Syslog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the Syslog logging object",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Syslog endpoints on a Fastly service version",
              options: [
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a Syslog logging endpoint on a Fastly service version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--name",
                  description: "The name of the Syslog logging object",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name of the Syslog logging object",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--address",
                  description: "A hostname or IPv4 address",
                  args: {
                    name: "address",
                  },
                },
                {
                  name: "--port",
                  description: "The port number",
                  args: {
                    name: "port",
                  },
                },
                {
                  name: "--use-tls",
                  description:
                    "Whether to use TLS for secure logging. Can be either true or false",
                },
                {
                  name: "--tls-ca-cert",
                  description:
                    "A secure certificate to authenticate the server with. Must be in PEM format",
                  args: {
                    name: "tls-ca-cert",
                  },
                },
                {
                  name: "--tls-hostname",
                  description:
                    "Used during the TLS handshake to validate the certificate",
                  args: {
                    name: "tls-hostname",
                  },
                },
                {
                  name: "--tls-client-cert",
                  description:
                    "The client certificate used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-cert",
                  },
                },
                {
                  name: "--tls-client-key",
                  description:
                    "The client private key used to make authenticated requests. Must be in PEM format",
                  args: {
                    name: "tls-client-key",
                  },
                },
                {
                  name: "--auth-token",
                  description:
                    "Whether to prepend each message with a specific token",
                  args: {
                    name: "auth-token",
                  },
                },
                {
                  name: "--format",
                  description: "Apache style log formatting",
                  args: {
                    name: "format",
                  },
                },
                {
                  name: "--format-version",
                  description:
                    "The version of the custom logging format used for the configured endpoint. Can be either 2 (default) or 1",
                  args: {
                    name: "format-version",
                  },
                },
                {
                  name: "--message-type",
                  description:
                    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
                  args: {
                    name: "message-type",
                  },
                },
                {
                  name: "--response-condition",
                  description:
                    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
                  args: {
                    name: "response-condition",
                  },
                },
                {
                  name: "--placement",
                  description:
                    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none or waf_debug",
                  args: {
                    name: "placement",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pops",
      description: "List Fastly datacenters",
    },
    {
      name: "purge",
      description: "Invalidate objects in the Fastly cache",
      options: [
        {
          name: "--all",
          description: "Purge everything from a service",
        },
        {
          name: "--file",
          description:
            "Purge a service of a newline delimited list of Surrogate Keys",
          args: {
            name: "file",
          },
        },
        {
          name: "--key",
          description: "Purge a service of objects tagged with a Surrogate Key",
          args: {
            name: "key",
          },
        },
        {
          name: "--service-id",
          description:
            "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
          args: {
            name: "service-id",
          },
        },
        {
          name: "--service-name",
          description: "The name of the service",
          args: {
            name: "service-name",
          },
        },
        {
          name: "--soft",
          description:
            "A 'soft' purge marks affected objects as stale rather than making them inaccessible",
        },
        {
          name: "--url",
          description: "Purge an individual URL",
          args: {
            name: "url",
          },
        },
      ],
    },
    {
      name: "service",
      description: "Manipulate Fastly services",
      subcommands: [
        {
          name: "create",
          description: "Create a Fastly service",
          options: [
            {
              name: "--name",
              description: "Service name",
              args: {
                name: "name",
              },
            },
            {
              name: "--type",
              description:
                'Service type. Can be one of "wasm" or "vcl", defaults to "vcl"',
              args: {
                name: "type",
              },
            },
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Fastly service",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--force",
              description: "Force deletion of an active service",
            },
          ],
        },
        {
          name: "describe",
          description: "Show detailed information about a Fastly service",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Fastly services",
          options: [
            {
              name: "--direction",
              description: "Direction in which to sort results",
              args: {
                name: "direction",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--page",
              description: "Page number of data set to fetch",
              args: {
                name: "page",
              },
            },
            {
              name: "--per-page",
              description: "Number of records per page",
              args: {
                name: "per-page",
              },
            },
            {
              name: "--sort",
              description: "Field on which to sort",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "search",
          description: "Search for a Fastly service by name",
          options: [
            {
              name: "--name",
              description: "Service name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Fastly service",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--name",
              description: "Service name",
              args: {
                name: "name",
              },
            },
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
          ],
        },
      ],
    },
    {
      name: "service-version",
      description: "Manipulate Fastly service versions",
      subcommands: [
        {
          name: "activate",
          description: "Activate a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
          ],
        },
        {
          name: "clone",
          description: "Clone a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivate a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Fastly service versions",
          options: [
            {
              name: "--json",
              description: "Render output as JSON",
            },
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Fastly service version",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', or the number of a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--autoclone",
              description:
                "If the selected service version is not editable, clone it and use the clone",
            },
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
          ],
        },
      ],
    },
    {
      name: "stats",
      description:
        "View historical and realtime statistics for a Fastly service",
      subcommands: [
        {
          name: "historical",
          description: "View historical stats for a Fastly service",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--from",
              description:
                "From time, accepted formats at https://fastly.dev/reference/api/metrics-stats/historical-stats",
              args: {
                name: "from",
              },
            },
            {
              name: "--to",
              description: "To time",
              args: {
                name: "to",
              },
            },
            {
              name: "--by",
              description: "Aggregation period (minute/hour/day)",
              args: {
                name: "by",
              },
            },
            {
              name: "--region",
              description: "Filter by region ('stats regions' to list)",
              args: {
                name: "region",
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              args: {
                name: "format",
              },
            },
          ],
        },
        {
          name: "realtime",
          description: "View realtime stats for a Fastly service",
          options: [
            {
              name: "--service-id",
              description:
                "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--service-name",
              description: "The name of the service",
              args: {
                name: "service-name",
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              args: {
                name: "format",
              },
            },
          ],
        },
        {
          name: "regions",
          description: "List stats regions",
        },
      ],
    },
    {
      name: "update",
      description: "Update the CLI to the latest version",
    },
    {
      name: "user",
      description: "Manipulate users of the Fastly API and web interface",
      subcommands: [
        {
          name: "create",
          description: "Create a user of the Fastly API and web interface",
          options: [
            {
              name: "--login",
              description:
                "The login associated with the user (typically, an email address)",
              args: {
                name: "login",
              },
            },
            {
              name: "--name",
              description: "The real life name of the user",
              args: {
                name: "name",
              },
            },
            {
              name: "--role",
              description:
                "The permissions role assigned to the user. Can be user, billing, engineer, or superuser",
              args: {
                name: "role",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a user of the Fastly API and web interface",
          options: [
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Get a specific user of the Fastly API and web interface",
          options: [
            {
              name: "--current",
              description: "Get the logged in user",
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              args: {
                name: "id",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
          ],
        },
        {
          name: "list",
          description: "List all users from a specified customer id",
          options: [
            {
              name: "--customer-id",
              description:
                "Alphanumeric string identifying the customer (falls back to FASTLY_CUSTOMER_ID)",
              args: {
                name: "customer-id",
              },
            },
            {
              name: "--json",
              description: "Render output as JSON",
            },
          ],
        },
        {
          name: "update",
          description: "Update a user of the Fastly API and web interface",
          options: [
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              args: {
                name: "id",
              },
            },
            {
              name: "--login",
              description:
                "The login associated with the user (typically, an email address)",
              args: {
                name: "login",
              },
            },
            {
              name: "--name",
              description: "The real life name of the user",
              args: {
                name: "name",
              },
            },
            {
              name: "--password-reset",
              description: "Requests a password reset for the specified user",
            },
            {
              name: "--role",
              description:
                "The permissions role assigned to the user. Can be user, billing, engineer, or superuser",
              args: {
                name: "role",
              },
            },
          ],
        },
      ],
    },
    {
      name: "vcl",
      description: "Manipulate Fastly service version VCL",
      subcommands: [
        {
          name: "custom",
          description: "Manipulate Fastly service version custom VCL",
          subcommands: [
            {
              name: "create",
              description: "Upload a VCL for a particular service and version",
              options: [
                {
                  name: "--content",
                  description:
                    "VCL passed as file path or content, e.g. $(< main.vcl)",
                  args: {
                    name: "content",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the VCL",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--main",
                  description: "Whether the VCL is the 'main' entrypoint",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the uploaded VCL for a particular service and version",
              options: [
                {
                  name: "--name",
                  description: "The name of the VCL to delete",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Get the uploaded VCL for a particular service and version",
              options: [
                {
                  name: "--name",
                  description: "The name of the VCL",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the uploaded VCLs for a particular service and version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the uploaded VCL for a particular service and version",
              options: [
                {
                  name: "--name",
                  description: "The name of the VCL to update",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--new-name",
                  description: "New name for the VCL",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--content",
                  description:
                    "VCL passed as file path or content, e.g. $(< main.vcl)",
                  args: {
                    name: "content",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "snippet",
          description:
            "Manipulate Fastly VCL snippets (blocks of VCL logic inserted into your service's configuration that don't require custom VCL)",
          subcommands: [
            {
              name: "create",
              description:
                "Create a snippet for a particular service and version",
              options: [
                {
                  name: "--content",
                  description:
                    "VCL snippet passed as file path or content, e.g. $(< snippet.vcl)",
                  args: {
                    name: "content",
                  },
                },
                {
                  name: "--name",
                  description: "The name of the VCL snippet",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--type",
                  description:
                    "The location in generated VCL where the snippet should be placed",
                  args: {
                    name: "type",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--dynamic",
                  description:
                    "Whether the VCL snippet is dynamic or versioned",
                },
                {
                  name: "--priority",
                  description:
                    "Priority determines execution order. Lower numbers execute first",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a specific snippet for a particular service and version",
              options: [
                {
                  name: "--name",
                  description: "The name of the VCL snippet to delete",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Get the uploaded VCL snippet for a particular service and version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--dynamic",
                  description:
                    "Whether the VCL snippet is dynamic or versioned",
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--name",
                  description: "The name of the VCL snippet",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--snippet-id",
                  description: "Alphanumeric string identifying a VCL Snippet",
                  args: {
                    name: "snippet-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the uploaded VCL snippets for a particular service and version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--json",
                  description: "Render output as JSON",
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a VCL snippet for a particular service and version",
              options: [
                {
                  name: "--version",
                  description:
                    "'latest', 'active', or the number of a specific version",
                  args: {
                    name: "version",
                  },
                },
                {
                  name: "--autoclone",
                  description:
                    "If the selected service version is not editable, clone it and use the clone",
                },
                {
                  name: "--content",
                  description:
                    "VCL snippet passed as file path or content, e.g. $(< snippet.vcl)",
                  args: {
                    name: "content",
                  },
                },
                {
                  name: "--dynamic",
                  description:
                    "Whether the VCL snippet is dynamic or versioned",
                },
                {
                  name: "--name",
                  description: "The name of the VCL snippet to update",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New name for the VCL snippet",
                  args: {
                    name: "new-name",
                  },
                },
                {
                  name: "--priority",
                  description:
                    "Priority determines execution order. Lower numbers execute first",
                  args: {
                    name: "priority",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                {
                  name: "--service-name",
                  description: "The name of the service",
                  args: {
                    name: "service-name",
                  },
                },
                {
                  name: "--snippet-id",
                  description: "Alphanumeric string identifying a VCL Snippet",
                  args: {
                    name: "snippet-id",
                  },
                },
                {
                  name: "--type",
                  description:
                    "The location in generated VCL where the snippet should be placed",
                  args: {
                    name: "type",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Display version information for the Fastly CLI",
    },
    {
      name: "whoami",
      description: "Get information about the currently authenticated account",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show context-sensitive help",
    },
    {
      name: "--token",
      description: "Fastly API token (or via FASTLY_API_TOKEN)",
      args: {
        name: "token",
      },
    },
    {
      name: "--verbose",
      description: "Verbose logging",
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["1.0.0"] = {};

export { versions };
export default completion;
