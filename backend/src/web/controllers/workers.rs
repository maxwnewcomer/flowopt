use axum::response::IntoResponse;
use axum::routing::{delete, get, post, put};
use axum::Router;
use axum::{extract::Path, Json};
use chrono::Utc;
use uuid::Uuid;

use crate::models::worker::{UpdateWorker, Worker, WorkerStatus};
use crate::web::universal::ApiResponse;

pub async fn list_workers() -> impl IntoResponse {
    unimplemented!()
}

pub async fn create_worker() -> impl IntoResponse {
    let new_worker = Worker {
        id: Uuid::now_v7(),
        project_id: None,
        status: WorkerStatus::UNKNOWN,
        current_task: None,
        hostname: String::new(),
        created_at: Utc::now(),
        updated_at: None,
        deleted_at: None,
    };

    ApiResponse::Data(new_worker)
}

pub async fn get_worker(Path(id): Path<Uuid>) -> impl IntoResponse {
    return ApiResponse::Data(id);
}

pub async fn update_worker(Path(_): Path<Uuid>, Json(_): Json<UpdateWorker>) -> impl IntoResponse {
    unimplemented!()
}

pub async fn delete_worker(Path(_): Path<Uuid>) -> impl IntoResponse {
    unimplemented!()
}

pub fn mount() -> Router {
    Router::new()
        .route("/", get(list_workers))
        .route("/", post(create_worker))
        .route("/:id", get(get_worker))
        .route("/:id", put(update_worker))
        .route("/:id", delete(delete_worker))
}
