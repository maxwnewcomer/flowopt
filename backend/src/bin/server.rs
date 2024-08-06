use axum::Router;
use flowopt::web;
use std::net::Ipv4Addr;
use tower_http::{
    cors::CorsLayer,
    trace::{DefaultMakeSpan, DefaultOnResponse, TraceLayer},
};
use tracing::{info, Level};

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new()
        .merge(web::util::mount())
        .nest("/workers", web::controllers::workers::mount())
        .layer(
            TraceLayer::new_for_http()
                .make_span_with(DefaultMakeSpan::new().level(Level::INFO))
                .on_response(DefaultOnResponse::new().level(Level::INFO)),
        )
        .layer(CorsLayer::very_permissive());

    let listener = tokio::net::TcpListener::bind((Ipv4Addr::UNSPECIFIED, 8080))
        .await
        .expect("failed to get TCPListener");

    info!("Listening on http://[::1]:4321");
    axum::serve(listener, app)
        .await
        .expect("failed to serve axum server");
}
