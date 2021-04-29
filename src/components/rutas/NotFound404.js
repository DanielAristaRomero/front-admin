import React from 'react';

export const NotFound404 = () => {
    return (
        <div className = "center-center">
            <div className = "flex">
                <span class="lock">
                    <i class="fa fa-frown-o" aria-hidden="true"></i>
                </span>
                <h1 className = "not-found">404</h1>
            </div>
            <h1 className = "text-4xx">Página no encontrada</h1>
        </div>
    )
}
