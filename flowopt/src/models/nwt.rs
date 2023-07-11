use serde::{Deserialize, Serialize};
use tpe::{parzen_estimator, range, TpeOptimizer};

#[derive(Serialize, Deserialize)]
pub struct NWTParams {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub published: bool,
}

#[derive(Serialize, Deserialize)]
pub struct NWTParmasFromWorker {
    pub nwt_params: NWTParams,
    pub mb: f32,
    pub time: f64,
}

pub struct NWTOptions {
    pub id: TpeOptimizer,
    pub published: TpeOptimizer,
}

impl NWTOptions {
    pub fn new() -> Self {
        NWTOptions {
            id: TpeOptimizer::new(parzen_estimator(), range(-5.0, 5.0).unwrap()),
            published: TpeOptimizer::new(parzen_estimator(), range(-5.0, 5.0).unwrap()),
        }
    }
}
