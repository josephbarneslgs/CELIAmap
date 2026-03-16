# ─────────────────────────────────────────────────────────────
# CELIA Alliance Interactive Map
# Dockerfile — optimised for Google Cloud Run
# ─────────────────────────────────────────────────────────────
#
# Build:   docker build -t celia-map .
# Run:     docker run -p 8080:8080 celia-map
# Deploy:  gcloud run deploy celia-map --source . --allow-unauthenticated
# ─────────────────────────────────────────────────────────────

FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy app files
COPY public/ /usr/share/nginx/html/

# Cloud Run sends traffic to port 8080
EXPOSE 8080

# Nginx runs as non-root for Cloud Run compatibility
RUN addgroup -g 1001 -S nginx-user \
 && adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin \
    -G nginx-user -g nginx-user nginx-user \
 && chown -R nginx-user:nginx-user /var/cache/nginx \
 && chown -R nginx-user:nginx-user /var/log/nginx \
 && chown -R nginx-user:nginx-user /etc/nginx/conf.d \
 && touch /var/run/nginx.pid \
 && chown -R nginx-user:nginx-user /var/run/nginx.pid

USER nginx-user

CMD ["nginx", "-g", "daemon off;"]
