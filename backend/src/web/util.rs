use axum::routing::get;
use axum::Router;
use serde::Serialize;

use crate::web::universal::ApiResponse;

async fn health() -> ApiResponse<()> {
    ApiResponse::Ok
}

#[derive(Serialize)]
struct Version {
    version: String,
}

async fn version() -> ApiResponse<Version> {
    ApiResponse::Data(Version {
        version: env!("CARGO_PKG_VERSION").to_string(),
    })
}

pub fn mount() -> Router {
    Router::new()
        .route("/health", get(health))
        .route("/version", get(version))
}
